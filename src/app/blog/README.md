# Pastures Blog System

This directory contains the blog system for the Pastures website. The blog is accessible at `/blog` and individual posts at `/blog/[slug]`.

## 📁 Structure

```
blog/
├── page.tsx              # Main blog listing page
├── [slug]/
│   └── page.tsx         # Individual blog post page template
└── README.md            # This file

lib/
└── blogPosts.ts         # Blog posts data and helper functions
```

## 📝 How to Add a New Blog Post

All blog posts are managed in a single file: `src/lib/blogPosts.ts`

### Step 1: Open the Blog Posts File

Navigate to: `src/lib/blogPosts.ts`

### Step 2: Add Your Blog Post

Add a new object to the `blogPosts` array:

```typescript
{
  slug: 'your-post-url-slug',                    // URL-friendly identifier
  title: 'Your Blog Post Title',                 // Main headline
  excerpt: 'A brief summary of your post...',    // 1-2 sentence summary
  author: 'Your Name',                           // Author name
  date: '2024-01-15',                           // Publication date (YYYY-MM-DD)
  readTime: '5 min read',                       // Estimated reading time
  category: 'features',                         // Choose from available categories
  tags: ['tag1', 'tag2', 'tag3'],              // Relevant tags
  content: `
    # Your Main Heading

    Your content here...
  `
}
```

### Step 3: Format Your Content

Use simple markdown-style formatting in the `content` field:

```markdown
# Main Heading (H1)
## Section Heading (H2)
### Subsection Heading (H3)

Regular paragraph text.

**Bold text**
*Italic text*

> Blockquote for Bible verses or important quotes

- Bullet point 1
- Bullet point 2

---

Horizontal line separator
```

## 🎨 Available Categories

Choose one category for each post:

- `'features'` - Product features and how-tos
- `'journaling'` - Journaling practices and tips
- `'bible'` - Biblical insights and Scripture study
- `'spiritual-growth'` - General spiritual growth topics
- `'announcement'` - Product updates and announcements

## 🏷️ Tags Best Practices

Add 2-5 relevant tags per post for better discoverability:

```typescript
tags: ['journaling', 'spiritual disciplines', 'reflection']
```

## 📋 Complete Example

Here's a full example of a blog post:

```typescript
{
  slug: 'how-to-use-daily-prompts',
  title: 'How to Use Daily Prompts Effectively',
  excerpt: 'Learn how to make the most of Pastures\' personalized daily prompts to deepen your spiritual reflection.',
  author: 'Pastures Team',
  date: '2024-02-01',
  readTime: '6 min read',
  category: 'features',
  tags: ['daily prompts', 'features', 'spiritual growth'],
  content: `
# How to Use Daily Prompts Effectively

Daily prompts in Pastures are designed to help you connect your experiences with biblical truth. Here's how to get the most out of this feature.

## What Are Daily Prompts?

Daily prompts are personalized questions that...

### Getting Started

1. First step
2. Second step
3. Third step

> "Your word is a lamp to my feet and a light to my path." - Psalm 119:105

## Best Practices

**Be Consistent**: Try to engage with prompts at the same time each day.

**Be Honest**: Write authentically about your experiences.

---

*Try it today and see the difference!*
  `
}
```

## 🚀 Publishing Workflow

1. **Write Your Content**: Draft in any editor
2. **Add to blogPosts.ts**: Copy your post into the array
3. **Set the Date**: Use today's date or schedule for future
4. **Preview Locally**: Run `npm run dev` and visit `/blog`
5. **Deploy**: Commit and push - your post goes live!

## 🎯 Content Ideas

### Features Category
- Deep dives into specific Pastures features
- How-to guides and tutorials
- Tips for maximizing the app

### Journaling Category
- Journaling best practices
- Different journaling methods
- Overcoming writer's block
- Creating consistent habits

### Bible Category
- Connecting Scripture to daily life
- Bible study techniques
- Psalm reflections
- Character studies

### Spiritual Growth Category
- Developing spiritual disciplines
- Prayer practices
- Community and relationships
- Testimony and personal stories

### Announcements
- New feature launches
- Product updates
- Community milestones

## 📊 SEO Best Practices

- **Title**: Keep under 60 characters, include main keyword
- **Excerpt**: 150-160 characters, compelling summary
- **Content**: Aim for 800-1500 words for in-depth posts
- **Tags**: Use 3-5 relevant, searchable keywords
- **Slug**: Keep short, descriptive, lowercase with hyphens

## 🔧 Helper Functions Available

The blog system includes these helper functions (all in `blogPosts.ts`):

```typescript
getAllPosts()                        // Get all posts, sorted by date
getPostBySlug(slug)                  // Get specific post
getPostsByCategory(category)         // Filter by category
getPostsByTag(tag)                   // Filter by tag
getRelatedPosts(post, limit)         // Get related posts
formatDate(dateString)               // Format date for display
```

## 💡 Tips for Great Blog Posts

1. **Start with a Hook**: Grab attention in the first paragraph
2. **Use Headings**: Break up long content with clear sections
3. **Include Examples**: Make concepts concrete
4. **Add Scripture**: Ground posts in biblical truth
5. **End with Action**: Give readers a clear next step
6. **Proofread**: Check for typos and clarity

## 🔮 Future Enhancements

Potential additions you might want to add later:

- [ ] Featured images for posts
- [ ] Comments section
- [ ] Author profiles
- [ ] Search functionality
- [ ] Newsletter signup
- [ ] Social media sharing
- [ ] Reading progress indicator
- [ ] Table of contents for long posts

## 🆘 Troubleshooting

**Post not showing up?**
- Check the date isn't in the future
- Verify the slug is unique
- Ensure all required fields are filled

**Formatting looks wrong?**
- Check markdown syntax
- Look for unclosed quotes
- Verify backticks in content strings

**Category not displaying correctly?**
- Ensure category matches one of the predefined options
- Check spelling and case sensitivity

## 📞 Need Help?

For technical issues or questions about the blog system, refer to the main project documentation or contact the development team.

---

Happy blogging! 📖✨

