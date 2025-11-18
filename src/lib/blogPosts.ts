// Blog post type definition
export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: React.ReactNode | string;
  author: string;
  date: string;
  readTime: string;
  category: 'features' | 'journaling' | 'bible' | 'spiritual-growth' | 'announcement';
  tags: string[];
  image?: string;
}

// Categories configuration
export const categories = {
  features: { label: 'Features', color: 'blue' },
  journaling: { label: 'Journaling Practices', color: 'purple' },
  bible: { label: 'Bible & Scripture', color: 'green' },
  'spiritual-growth': { label: 'Spiritual Growth', color: 'indigo' },
  announcement: { label: 'Announcements', color: 'amber' },
};

// Blog posts data
// Add your blog posts here - each post can be easily managed
export const blogPosts: BlogPost[] = [
  {
    slug: 'welcome-to-pastures-blog',
    title: 'Welcome to the Pastures Blog',
    excerpt: 'Discover how Pastures can transform your spiritual journey through intelligent journaling and AI-powered insights.',
    author: 'Pastures Team',
    date: '2024-01-15',
    readTime: '5 min read',
    category: 'announcement',
    tags: ['introduction', 'getting started'],
    content: `
# Welcome to the Pastures Blog

We're excited to launch our blog - a space dedicated to helping you grow deeper in your faith through thoughtful reflection, biblical insights, and practical guidance.

## What You'll Find Here

### Feature Deep Dives
Learn how to make the most of Pastures' intelligent features, from AI-powered categorization to personalized daily prompts.

### Journaling Best Practices
Discover proven techniques for meaningful spiritual journaling that connects your daily experiences with God's Word.

### Biblical Insights
Explore how Scripture speaks to modern life, with practical applications for your faith journey.

### Community Stories
Read testimonies and experiences from fellow believers using Pastures to grow closer to God.

## Our Mission

At Pastures, we believe that technology should serve your spiritual growth, not distract from it. Through this blog, we aim to equip you with the knowledge and inspiration to:

- Develop consistent spiritual disciplines
- Connect life experiences with biblical truth
- Build a rich archive of God's faithfulness
- Grow in relationship with Christ

Stay tuned for regular posts that will help you make the most of your faith journey!

---

*"He makes me lie down in green pastures..." - Psalm 23:2*
    `
  },
  {
    slug: 'why-journaling-matters-for-christians',
    title: 'Why Journaling Matters for Christians',
    excerpt: 'Explore the biblical foundation and practical benefits of keeping a spiritual journal in your walk with God.',
    author: 'Pastures Team',
    date: '2024-01-20',
    readTime: '4 min read',
    category: 'journaling',
    tags: ['journaling', 'spiritual disciplines', 'reflection'],
    content: `
# Why Journaling Matters for Christians

Journaling isn't just a modern trend - it's a practice deeply rooted in Scripture and Christian tradition. Let's explore why this spiritual discipline can transform your relationship with God.

## Biblical Foundation

Throughout Scripture, we see God's people recording their experiences, prayers, and insights:

- **The Psalms**: David's honest prayers and reflections
- **Prophetic Books**: God commanded prophets to write down His words
- **Paul's Letters**: Written testimonies of faith and teaching
- **Revelation**: John wrote what he saw and heard

God Himself values written records of faith journeys.

## Five Benefits of Spiritual Journaling

### 1. Remembering God's Faithfulness
When we write down prayers and God's answers, we create a tangible record of His faithfulness. In times of doubt, we can look back and remember.

> "I will remember the deeds of the LORD; yes, I will remember your miracles of long ago." - Psalm 77:11

### 2. Processing Emotions Honestly
Like the Psalmists, journaling gives us space to bring our authentic selves before God - including doubts, fears, and struggles.

### 3. Recognizing Spiritual Patterns
Regular reflection helps us identify recurring themes, growth areas, and God's consistent character in our lives.

### 4. Deepening Scripture Meditation
Writing about how God's Word applies to our lives moves truth from head to heart.

### 5. Creating Kingdom Legacy
Your journal becomes a testimony for future generations of God's work in your life.

## Getting Started

Don't overthink it. Start simple:
- Set aside 10 minutes daily
- Write authentically to God
- Record both struggles and victories
- Note Scripture that speaks to you
- Track prayers and answers

With tools like Pastures, you can make journaling easier and more insightful through intelligent organization and AI-powered connections.

## Conclusion

Journaling isn't about perfect prose - it's about honest conversation with God and intentional reflection on His work in your life.

Will you start today?

---

*"Write down the revelation and make it plain on tablets..." - Habakkuk 2:2*
    `
  },
  {
    slug: 'understanding-ai-journeys',
    title: 'Understanding AI-Powered Journeys in Pastures',
    excerpt: 'Learn how Pastures automatically categorizes your journal entries into meaningful life journeys using advanced AI.',
    author: 'Pastures Team',
    date: '2024-01-25',
    readTime: '6 min read',
    category: 'features',
    tags: ['AI', 'journeys', 'features', 'categorization'],
    content: `
# Understanding AI-Powered Journeys in Pastures

One of Pastures' most powerful features is the automatic organization of your journal entries into meaningful "Journeys" - distinct tracks of your spiritual and relational life.

## What Are Journeys?

Journeys are intelligent categories that help you see patterns across different areas of your life:

- **People**: Track relationships with family, friends, church members, mentors, acquaintances, etc.
- **Thanksgiving Items**: Track items you are thankful for
- **Prayer Requests**: Organize and follow prayer requests over time
- **Areas of Sin**: Identify areas in your life that you need to be growing in
- **Emotions**: Track your emotions and how they are affecting you
- **Issues Faced**: Track issues you are facing in your life

## How AI Categorization Works

When you write a journal entry, Pastures' AI analyzes:
- **Context**: Who you're writing about and what situations you're describing
- **Emotions**: The feelings you're expressing
- **Themes**: Recurring topics or spiritual questions
- **Relationships**: People mentioned and your interactions

The AI then automatically tags your entry with relevant journeys, without you having to manually organize anything.

## Why This Matters

### 1. Holistic View
Instead of chronological entries only, see your life through thematic lenses. How has your relationship with a specific person evolved? What patterns emerge in your prayer life?
### 2. Reduced Friction
No manual tagging or organization required. Just write authentically, and let Pastures handle the rest.
### 3. Surprising Insights
The AI often surfaces connections you might miss - linking entries from months apart that share common themes or relationships.
### 4. Intentional Review
Easily review all entries related to a specific person, prayer request, or growth area when you need encouragement or clarity.

## Real-World Example

Imagine you write about:
- Monday: A difficult conversation with a coworker
- Wednesday: Praying for patience at work
- Friday: Breakthrough in understanding that coworker's perspective

Pastures automatically:
- Creates a "Work Relationships" journey
- Tags all three entries
- Connects the prayer request to the breakthrough
- Shows you the progression over the week

## Privacy & Security

Your journal entries are:
✅ Encrypted and secure
✅ Processed privately
✅ Never shared or sold
✅ Yours to export anytime

## Getting the Most from Journeys

To maximize this feature:
1. **Write naturally** - Don't worry about organization
2. **Be specific** - Mention names and details
3. **Review regularly** - Check your journeys weekly
4. **Pray through them** - Use journeys as prayer prompts

## Conclusion

AI-powered journeys transform your journal from a flat chronological record into a rich, interconnected map of your spiritual life.

Experience the difference in how you understand God's work in your life!

---

*Available in Pastures Premium. Start your 2-month free trial today.*
    `
  },
  {
    slug: 'building-pastures-insights-nus-students',
    title: 'Building Pastures: User Group Session (Nov 2025)',
    excerpt: 'We sat down with the NUS Business and Computing Christian Fellowship to discuss faith, technology, and the future of Christian journaling. Here is what we learned.',
    author: 'Pastures Team',
    date: '2025-11-18',
    readTime: '5 min read',
    category: 'announcement',
    tags: ['user research', 'building in public', 'community', 'faith and tech'],
    content: `
# Building Pastures: User Group Session (Nov 2025)

Today was a milestone for **Pastures**. We had the privilege of sitting down with 8 members of the Business and Computing Christian Fellowship at the National University of Singapore (NUS).

We didn't just look at screens; we looked at hearts. We discussed how young Christians are currently connecting with God, their struggles with consistency, and how technology—specifically AI—can bridge that gap without replacing the Holy Spirit.

Here is what we learned, what we got right, and the hard questions we need to answer.

## 1. The State of Christian Journaling: "Seasons and Scraps"

One of the biggest takeaways from the session is that spiritual documentation is rarely linear. When we asked the group how they currently journal or take sermon notes, the answers were incredibly diverse.

There is no "standard" user. We found that journaling often happens in:

* **Phases and Seasons:** Many students noted they only journal during "unfamiliar cases" or when "things get tough." It’s often ad-hoc rather than a daily discipline.
* **Digital Fragmentation:** The tools are everywhere. Some use physical books (one student carries a specific book everywhere), others use Google Docs (one entry per year), Excel sheets for verse tracking, and even private Telegram channels to mark spiritual milestones.
* **The "Write and Forget" Problem:** A common pain point was writing things down but never reading them again. As one student put it, they "take stock" but struggle to retrieve those insights later.

This validates our core vision: **Reflection helps us see God's work in our lives**. We are building Pastures to solve this fragmentation, turning scattered notes into a cohesive spiritual journey.

## 2. Where AI Shines

We introduced the group to the core pillars of Pastures: **Learnings, Entries, and Prayer**.

The feedback on the **Daily Prompt** feature was particularly encouraging. Students liked how the app personalized the experience, offering a starting point for those who stare at a blank page. There was genuine excitement about the concept of AI recommending verses based on their current emotional state or recent entries.

This aligns with our roadmap to create a "Christian superapp" that helps believers grow, using technology to curate scripture that speaks directly to their current season of life.

## 3. The Hard Truths: UX Friction & AI Anxiety

However, a user feedback session isn't useful if it’s just compliments. The students were honest about where we need to improve, and we are grateful for that.

### The User Experience (UX) Hurdles
* **Navigation:** New users struggled to find the "New Entry" button during the onboarding phase.
* **Terminology:** There was confusion between "View" and "Plant." We need to make our language intuitive—separation between *inputting* (Planting) and *reflecting* (Viewing/Grazing) needs to be clearer.
* **Categorization:** The category review screen was overwhelming. We are looking into simplifying this to make tagging learnings easier.

### The Theological Elephant in the Room
The most critical feedback, however, wasn't about buttons—it was about **Trust**. Several students raised valid concerns about AI in a faith context:

> "What if it hallucinates?"
> "What if it twists the Word of God in its interpretation?"

These are the exact questions we *should* be asking. As we build features like the Learning Assistant and Semantic Search, our priority is not just "cool tech," but **biblical integrity**.

## 4. The Road Ahead

We are taking this feedback back to the lab immediately. Here is what is coming next based on today's session:

1.  **Guardrails for Truth:** We are doubling down on our prompt engineering to ensure the AI points users *back* to Scripture rather than interpreting it loosely.
2.  **Privacy First:** We heard you on data isolation. We are exploring ways to keep sensitive data local and ensure your spiritual diary remains between you and God. Meanwhile, rest assured that your data is encrypted and stored securely, and that your content will never be shared, sold, or read by anyone other than you.

## Final Thoughts

Our vision is based on **Psalm 23**: *"He makes me lie down in green pastures, he leads me beside quiet waters, he refreshes my soul."*

Technology is just the vessel; the refreshment comes from Him. We are building Pastures not to replace your Bible, but to help you engage with it more deeply.
    `
  }
];

// Helper functions
export function getAllPosts(): BlogPost[] {
  return blogPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find(post => post.slug === slug);
}

export function getPostsByCategory(category: BlogPost['category']): BlogPost[] {
  return blogPosts
    .filter(post => post.category === category)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getPostsByTag(tag: string): BlogPost[] {
  return blogPosts
    .filter(post => post.tags.includes(tag))
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getRelatedPosts(currentPost: BlogPost, limit: number = 3): BlogPost[] {
  return blogPosts
    .filter(post => 
      post.slug !== currentPost.slug && 
      (post.category === currentPost.category || 
       post.tags.some(tag => currentPost.tags.includes(tag)))
    )
    .slice(0, limit);
}

export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });
}

