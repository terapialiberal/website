require 'json'

module ArticlesGenerator
  class Generator < Jekyll::Generator
    safe true
    priority :high

    def generate(site)
      articles = []

      site.collections['posts'].docs.each do |doc|
        # Skip drafts in production
        if site.config['environment'] == 'production' && doc.data['draft']
          next
        end

        # Format date as DD/MM/YYYY
        date = doc.data['date']
        formatted_date = date.strftime('%d/%m/%Y') if date

        # Determine if it's a video or article
        tipo = doc.data['tipo'] || 'articulo'

        # Get video_id from frontmatter or extract from URL
        video_id = doc.data['video_id'] || extract_video_id(doc.data['video_url'])

        # Get image - prefer explicit image field or YouTube thumbnail for videos
        image_url = doc.data['image']
        if video_id && !image_url
          image_url = "https://img.youtube.com/vi/#{video_id}/maxresdefault.jpg"
        end

        # Get URL - use the Jekyll generated URL
        url = doc.url
        # Also store HTML version for compatibility
        url_html = doc.url.end_with?('/') ? "#{doc.url}index.html" : "#{doc.url}.html"

        # Get tags as array
        tags = doc.data['tags'] || []

        article = {
          'titulo' => doc.data['title'],
          'descripcion' => doc.data['description'],
          'url' => url,
          'url_html' => url_html,
          'fecha' => formatted_date,
          'video_id' => video_id || '',
          'tipo' => tipo,
          'tags' => tags,
          'image_url' => image_url || '',
          'author' => doc.data['author'] || 'Nicolás Martínez Lage'
        }

        articles << article
      end

      # Sort by date (newest first)
      articles.sort_by! { |a| Date.parse(a['fecha']) rescue Date.today }.reverse!

      # Write JSON file to source data folder (Jekyll will copy to _site)
      output_dir = File.expand_path('data', site.source)
      FileUtils.mkdir_p(output_dir)
      File.write("#{output_dir}/articles.json", JSON.pretty_generate(articles))

      Jekyll.logger.info "ArticlesGenerator", "Generated #{articles.length} articles to data/articles.json"
    end

    def extract_video_id(video_url)
      return nil unless video_url

      # Handle various YouTube URL formats
      patterns = [
        /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([a-zA-Z0-9_-]{11})/,
        /(?:youtube\.com\/shorts\/)([a-zA-Z0-9_-]{11})/
      ]

      patterns.each do |pattern|
        match = video_url.match(pattern)
        return match[1] if match
      end

      nil
    end
  end
end
