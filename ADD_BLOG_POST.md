# 📝 Add a Blog Post - Quick Guide

## Step-by-Step

### 1. Open the File
```
src/lib/blogPosts.ts
```

### 2. Find This Line
Look for: `export const blogPosts: BlogPost[] = [`

### 3. Add Your Post
Copy and paste this template **inside the array**:

```typescript
{
  slug: 'your-url-slug',
  title: 'Your Post Title',
  excerpt: 'Brief summary of your post in 1-2 sentences.',
  author: 'Your Name',
  date: '2024-02-15', // Use today's date: YYYY-MM-DD
  readTime: '5 min read',
  category: 'features', // Choose: features, journaling, bible, spiritual-growth, or announcement
  tags: ['tag1', 'tag2', 'tag3'],
  content: `
# Your Post Title

Write your content here...

## Section Heading

More content...

**Bold text** and *italic text*

> "Bible verse" - Reference

- Point 1
- Point 2

---

*Closing thought*
  `
},
```

### 4. Save the File

### 5. Done! ✅

Your post is now live at: `https://pastures.app/blog/your-url-slug`

## 📋 Quick Reference

### Categories
- `'features'` - Product features (blue)
- `'journaling'` - Journaling tips (purple)
- `'bible'` - Scripture insights (green)
- `'spiritual-growth'` - Spiritual topics (indigo)
- `'announcement'` - Product news (amber)

### Formatting
```
# Large heading
## Medium heading
### Small heading

Regular paragraph

**bold text**
*italic text*

> Quote or Bible verse

- List item
- Another item

---
Divider line
```

### Tips
✅ Keep slug lowercase with hyphens
✅ Make title 40-60 characters
✅ Write 1-2 sentence excerpt
✅ Add 3-5 relevant tags
✅ Aim for 800-1500 word posts

## 🎯 Real Example

```typescript
{
  slug: 'morning-journaling-routine',
  title: 'Building a Morning Journaling Routine That Sticks',
  excerpt: 'Discover practical tips for creating a sustainable morning journaling practice that deepens your walk with God.',
  author: 'Pastures Team',
  date: '2024-02-20',
  readTime: '6 min read',
  category: 'journaling',
  tags: ['morning routine', 'habits', 'spiritual disciplines'],
  content: `
# Building a Morning Journaling Routine That Sticks

Starting your day with journaling can transform your spiritual life. Here's how to make it a lasting habit.

## Why Morning Journaling?

Mornings offer a unique opportunity to set the tone for your day...

## 5 Steps to Get Started

### 1. Start Small
Begin with just 5 minutes...

### 2. Create a Trigger
Link journaling to an existing morning habit...

**Pro Tip**: Keep your journal and Bible together.

## Overcoming Common Obstacles

> "In the morning, LORD, you hear my voice" - Psalm 5:3

- Challenge: Too tired
  Solution: Prepare the night before
- Challenge: No time
  Solution: Start with 5 minutes

## Conclusion

Consistency beats perfection. Start tomorrow morning!

---

*Ready to begin? Download Pastures and start your journey.*
  `
}
```

## 🚨 Common Mistakes to Avoid

❌ Forgetting comma after closing brace `},`
❌ Using quotes inside title without escaping: `'It's Good'` → Use `'It\\'s Good'`
❌ Leaving slug with spaces: `'my post'` → Use `'my-post'`
❌ Wrong date format: `'Feb 15, 2024'` → Use `'2024-02-15'`
❌ Typo in category name: `'feature'` → Use `'features'`

## ✅ Checklist Before Publishing

- [ ] Unique slug (check no other post uses it)
- [ ] Title is compelling and under 60 chars
- [ ] Excerpt is 1-2 sentences
- [ ] Date is correct format (YYYY-MM-DD)
- [ ] Category matches available options
- [ ] 3-5 relevant tags
- [ ] Content has proper headings
- [ ] Checked for typos
- [ ] Comma after closing brace

## 🎉 That's It!

Just add to `blogPosts.ts` and you're done. No complex build steps or configuration needed.

**Questions?** See `BLOG_SYSTEM_OVERVIEW.md` for full documentation.

