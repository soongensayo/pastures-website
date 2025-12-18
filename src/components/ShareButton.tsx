'use client'

import { Share2 } from 'lucide-react'

interface ShareButtonProps {
    title: string
    text: string
    url?: string // Optional, defaults to window.location.href
}

export default function ShareButton({ title, text, url }: ShareButtonProps) {
    const handleShare = async () => {
        const shareUrl = url || window.location.href

        if (navigator.share) {
            try {
                await navigator.share({
                    title,
                    text,
                    url: shareUrl,
                })
            } catch (err) {
                console.log('Share failed:', err)
            }
        } else {
            // Fallback: copy to clipboard
            navigator.clipboard.writeText(shareUrl)
            alert('Link copied to clipboard!')
        }
    }

    return (
        <button
            onClick={handleShare}
            className="ml-auto flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
            aria-label="Share article"
        >
            <Share2 className="w-4 h-4" />
            <span className="text-sm font-medium">Share</span>
        </button>
    )
}
