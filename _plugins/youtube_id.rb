module Jekyll
  module YouTubeFilter
    def youtube_id(input)
      if input.nil? || input.empty?
        return nil
      end

      # Si ya es solo el ID (11 caracteres)
      if input.match?(/^[a-zA-Z0-9_-]{11}$/)
        return input
      end

      # Extraer ID de URLs de YouTube
      regex = /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/
      match = input.match(regex)
      match ? match[1] : nil
    end
  end
end

Liquid::Template.register_filter(Jekyll::YouTubeFilter)
