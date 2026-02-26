module YouTubeFilter
  def youtube_id(input)
    return nil if input.nil? || input.empty?

    # Si ya es solo el ID (11 caracteres)
    if input.match?(/^[a-zA-Z0-9_-]{11}$/)
      return input
    end

    # Extraer ID de URL de YouTube
    patterns = [
      /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([a-zA-Z0-9_-]{11})/,
      /youtube\.com\/shorts\/([a-zA-Z0-9_-]{11})/
    ]

    patterns.each do |pattern|
      match = input.match(pattern)
      return match[1] if match
    end

    input
  end
end

Liquid::Template.register_filter(YouTubeFilter)
