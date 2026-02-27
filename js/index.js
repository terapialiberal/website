/**
 * Terapia Liberal - index.js
 * Note: The main homepage logic is now inline in index.html.
 * This file is kept for compatibility with Jekyll layouts that may include it.
 *
 * JSON field reference (data/articles.json):
 *   title, description, url, fecha, video_id, tipo, tags, image
 */

// Helper: extract YouTube ID from various URL formats
function getYouTubeId(input) {
    if (!input) return null;
    // Already an ID (11 chars, no slashes)
    if (/^[a-zA-Z0-9_-]{11}$/.test(input)) return input;
    // URL formats
    const patterns = [
        /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/|youtube\.com\/shorts\/)([a-zA-Z0-9_-]{11})/
    ];
    for (const pattern of patterns) {
        const match = input.match(pattern);
        if (match) return match[1];
    }
    return input;
}
