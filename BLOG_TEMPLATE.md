# Quick Blog Post Template

Copy this template when adding a new blog post to `src/lib/blogPosts.ts`

## Template

```typescript
{
  slug: 'your-post-url-slug',
  title: 'Your Post Title Here',
  excerpt: 'A compelling 1-2 sentence summary that makes readers want to click.',
  author: 'Your Name',
  date: '2024-MM-DD',
  readTime: '5 min read',
  category: 'features', // or 'journaling', 'bible', 'spiritual-growth', 'announcement'
  tags: ['tag1', 'tag2', 'tag3'],
  content: `
# Main Title

Introduction paragraph that hooks the reader...

## First Section

Content here...

### Subsection

More detailed content...

> "Scripture quote here" - Reference

## Key Points

**Important point**: Explanation here.

- Bullet point 1
- Bullet point 2
- Bullet point 3

## Practical Application

How readers can apply this...

## Conclusion

Summary and call to action...

---

*Closing thought or Scripture*
  `
}
```

## Categories

- `'features'` → Product features (blue badge)
- `'journaling'` → Journaling practices (purple badge)
- `'bible'` → Scripture & theology (green badge)
- `'spiritual-growth'` → General growth (indigo badge)
- `'announcement'` → Product updates (amber badge)

## Formatting Guide

```markdown
# H1 Heading (large, for main title)
## H2 Heading (section headers)
### H3 Heading (subsections)

Regular paragraph

**Bold text**
*Italic text*

> Blockquote (great for Bible verses)

- Bullet list item
- Another item

---

Horizontal divider
```

## Tips

1. **Slug**: lowercase-with-hyphens, unique, descriptive
2. **Title**: 40-60 characters, keyword-rich
3. **Excerpt**: 120-160 characters, compelling
4. **Date**: Use YYYY-MM-DD format
5. **Tags**: 3-5 relevant keywords
6. **Content**: 800-1500 words is ideal

## Where to Add

1. Open: `src/lib/blogPosts.ts`
2. Find the `blogPosts` array
3. Add your new post object to the array
4. Save the file
5. Post is live at: `/blog/your-post-url-slug`

## Example: Simple Post

```typescript
{
  slug: 'getting-started-with-pastures',
  title: 'Getting Started with Pastures: A Beginner\'s Guide',
  excerpt: 'New to Pastures? Learn how to set up your account and start your spiritual journaling journey today.',
  author: 'Pastures Team',
  date: '2024-02-15',
  readTime: '4 min read',
  category: 'features',
  tags: ['getting started', 'beginner', 'tutorial'],
  content: `
# Getting Started with Pastures

Welcome to Pastures! This guide will help you get started with spiritual journaling.

## Download the App

First, download Pastures from the App Store and create your account.

## Your First Entry

Creating your first journal entry is simple:

1. Tap the "New Entry" button
2. Write about your day
3. Let AI categorize it automatically

## Daily Prompts

Each day, you can generate a personalized prompt that connects your experiences with Scripture.

**Pro Tip**: Engage with prompts at the same time each day to build consistency.

## Next Steps

- Explore the Journeys feature
- Try the Learning Management
- Connect with your faith community

---

*Ready to start? Download Pastures today!*
  `
}
```

## Need Help?

See `src/app/blog/README.md` for detailed documentation.

