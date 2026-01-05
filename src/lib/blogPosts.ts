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
    date: '2025-11-01',
    readTime: '5 min read',
    category: 'announcement',
    tags: ['introduction', 'getting started', 'Christian journaling app', 'spiritual growth app'],
    content: `
We're excited to launch our blog!

## What You'll Find Here

### Feature Deep Dives
Learn how to make the most of Pastures' intelligent features, from AI-powered categorization to personalized daily prompts. These tools are designed to enhance your **Christian journaling** experience.

### Journaling Best Practices
Discover proven techniques for meaningful **spiritual journaling** that connects your daily experiences with God's Word.

### Biblical Insights
Explore how Scripture speaks to modern life, with practical applications for your **faith journey**.

### Community Stories
Read testimonies and experiences from fellow believers using Pastures to grow closer to God.

## Our Mission

At Pastures, we believe that technology should serve your **spiritual growth**, not distract from it. Through this blog, we aim to equip you with the knowledge and inspiration to:

- Develop consistent **spiritual disciplines**
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
    title: 'Why Journaling Matters for Christians: 5 Biblical Benefits',
    excerpt: 'Explore the biblical foundation and practical benefits of keeping a spiritual journal. Learn how a Christian journaling app can transform your walk with God.',
    author: 'Pastures Team',
    date: '2025-11-02',
    readTime: '4 min read',
    category: 'journaling',
    tags: ['journaling', 'spiritual disciplines', 'reflection', 'Bible study', 'Christian living'],
    content: `
Journaling isn't just a modern trend - it's a practice deeply rooted in Scripture and Christian tradition. Let's explore why this **spiritual discipline** can transform your relationship with God.

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
Writing about how God's Word applies to our lives moves truth from head to heart. This is a core part of **Bible study and reflection**.

### 5. Creating Kingdom Legacy
Your journal becomes a testimony for future generations of God's work in your life.

## Getting Started

Don't overthink it. Start simple:
- Set aside 10 minutes daily
- Write authentically to God
- Record both struggles and victories
- Note Scripture that speaks to you
- Track prayers and answers

With tools like **Pastures**, you can make journaling easier and more insightful through intelligent organization and AI-powered connections. It's the ultimate **Christian journaling app** for the modern believer.

## Conclusion

Journaling isn't about perfect prose - it's about honest conversation with God and intentional reflection on His work in your life.

Will you start today?

---

*"Write down the revelation and make it plain on tablets..." - Habakkuk 2:2*
    `
  },
  {
    slug: 'understanding-ai-journeys',
    title: 'How AI-Powered Journeys Help You Track Spiritual Growth',
    excerpt: 'Learn how Pastures uses AI to automatically organize your journal entries into meaningful life journeys, helping you see God at work.',
    author: 'Pastures Team',
    date: '2025-11-02',
    readTime: '6 min read',
    category: 'features',
    tags: ['AI', 'journeys', 'spiritual growth', 'categorization', 'Christian AI'],
    content: `
One of Pastures' most powerful features is the automatic organization of your journal entries into meaningful "Journeys" - distinct tracks of your spiritual and relational life. Using **AI for spiritual growth** has never been more accessible.

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

The AI then automatically tags your entry with relevant journeys, without you having to manually organize anything. This **automated journaling** saves time and provides deeper insights.

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

AI-powered journeys transform your journal from a flat chronological record into a rich, interconnected map of your spiritual life. Experience the future of **digital spiritual disciplines**.

---

*Available in Pastures Premium. Start your 2-month free trial today.*
    `
  },
  {
    slug: 'building-pastures-insights-nus-students',
    title: 'Building Pastures: NUS Student Insights on Faith and Tech',
    excerpt: 'We discussed faith, technology, and the future of Christian journaling with NUS students. Discover how we’re building the best app for spiritual growth.',
    author: 'Pastures Team',
    date: '2025-11-18',
    readTime: '5 min read',
    category: 'announcement',
    tags: ['user research', 'building in public', 'Christian students', 'faith and tech', 'NUS'],
    content: `
Today was a milestone for **Pastures**. We had the privilege of sitting down with 8 members of the Business and Computing Christian Fellowship at the National University of Singapore (NUS).

<img src="/blog-assets/user-group-18-nov.png" alt="Pastures team with NUS Business and Computing Christian Fellowship members discussing AI and faith" class="w-full rounded-lg shadow-lg my-8" />

We didn't just look at screens; we looked at hearts. We discussed how young Christians are currently connecting with God, their struggles with consistency, and how technology (specifically **AI for Christians**) can bridge that gap without replacing the Holy Spirit.

Here is what we learned, what we got right, and the hard questions we need to answer.

## 1. The State of Christian Journaling: "Seasons and Scraps"

One of the biggest takeaways from the session is that spiritual documentation is rarely linear. When we asked the group how they currently journal or take sermon notes, the answers were incredibly diverse.

There is no "standard" user. We found that journaling often happens in:

* **Phases and Seasons:** Many students noted they only journal during "unfamiliar cases" or when "things get tough." It’s often ad-hoc rather than a daily discipline.
* **Digital Fragmentation:** The tools are everywhere. Some use physical books, others use Google Docs, Excel sheets for verse tracking, and even private Telegram channels.
* **The "Write and Forget" Problem:** A common pain point was writing things down but never reading them again.

This validates our core vision: **Reflection helps us see God's work in our lives**. We are building Pastures to solve this fragmentation, turning scattered notes into a cohesive **spiritual journey**.

## 2. Where AI Shines

The feedback on the **Daily Prompt** feature was particularly encouraging. Students liked how the app personalized the experience, offering a starting point for those who stare at a blank page. There was genuine excitement about the concept of **AI-powered devotionals** recommending verses based on their current emotional state.

## 3. The Hard Truths: UX Friction & AI Anxiety

Students were honest about where we need to improve.

### The User Experience (UX) Hurdles
* **Navigation:** New users struggled to find the "New Entry" button during the onboarding phase.
* **Terminology:** There was confusion between "View" and "Plant." We need to make our language intuitive—separation between *inputting* (Planting) and *reflecting* (Viewing/Grazing) needs to be clearer.
* **Categorization:** The category review screen was overwhelming. We are looking into simplifying this to make tagging learnings easier.

### The Theological Elephant in the Room
Several students raised valid concerns about AI in a faith context:
> "What if it hallucinates?"
> "What if it twists the Word of God in its interpretation?"

These are the exact questions we *should* be asking. As we build features like the **Learning Assistant** and **Semantic Search**, our priority is **biblical integrity**.

## 4. The Road Ahead

1.  **Guardrails for Truth:** Ensuring the AI points users *back* to Scripture.
2.  **Privacy First:** Keeping sensitive spiritual data local and encrypted.

## Final Thoughts

Our vision is based on **Psalm 23**: *"He makes me lie down in green pastures, he leads me beside quiet waters, he refreshes my soul."*

Technology is just the vessel; the refreshment comes from Him. We are building Pastures to help you engage with the Bible more deeply.
    `
  },
  {
    slug: 'introducing-learning-plans',
    title: 'Introducing Learning Plans: A New Way to Study the Bible',
    excerpt: 'Ditch the guilt of falling behind on Bible reading plans. Discover a session-based approach to deep Bible study with our new Learning Plans.',
    author: 'Pastures Team',
    date: '2025-11-24',
    readTime: '6 min read',
    category: 'features',
    tags: ['Bible study', 'Bible reading plan', 'Christian learning', 'AI Bible assistant'],
    content: `
We've all felt the friction of missing a day in a "Read the Bible in a Year" plan. Today, we are changing that with **Learning Plans** (accessible via the "Explore" button in the "New Learning" screen).

## The Problem: The "Checkbox" Mentality

Current **Bible plans** often lead to:
1.  **Fatigue:** Rushing through verses.
2.  **Guilt:** Feeling like a failure when you "fall behind."
3.  **Passive Reading:** Scanning words without digesting them.

We believe going into the Word should be intentional and deliberate.

## Enter Learning Plans

We have reimagined **Bible engagement** to be **Session-Based** rather than Schedule-Based.
<img src="/blog-assets/chooselearningplans.png" alt="Choosing Bible Book Learning Plans in the Pastures app" class="w-1/2 mx-auto rounded-lg shadow-lg my-8" />

### How It Works

**1. You Set the Pace**
Each time you choose to enter the plan, a new **Session** begins. No overdue notifications.

**2. Intelligent Action Menu**
* **Write Notes:** Jot down immediate reflections.
<img src="/blog-assets/learningplannotes.png" alt="Taking notes during a Bible study session in Pastures" class="w-1/2 mx-auto rounded-lg shadow-lg my-8" />
* **Ask Questions:** Confused? Ask the **AI Bible Assistant** right there in the text.
<img src="/blog-assets/learningplans-blogpost-1.png" alt="Using the Pastures Learning Assistant to ask questions about Scripture" class="w-1/2 mx-auto rounded-lg shadow-lg my-8" />

**3. Checkpoints & Learnings**
Your notes and Q&A responses are saved as a "Learning," helping you build your own **personal commentary library**.

## Why We Designed It This Way: Context is Key

We prioritized **Bible Book Plans** because:
* **To Know God's Character:** Reading whole books reveals His character in its fullness.
* **To Live as Followers of Jesus:** Context bridges the gap between ancient text and modern **discipleship**.
* **Context Creates Clarity:** Understanding the narrative arc of redemption.

## A Note on AI & Theology

The **Pastures Learning Assistant** is a tool to educate, not a spiritual authority. It's designed for **biblically-grounded answers** that point you back to the Word.

Update your app today to start your first Session!

---

*"Thy word is a lamp unto my feet, and a light unto my path." - Psalm 119:105*
    `
},
{
  slug: 'praying-for-people-journeys',
  title: 'Supporting Your Prayer Life with Recorded Intercession',
  excerpt: 'Learn how to use People Journeys to record audio prayers and witness God’s faithfulness in your relationships over time.',
  author: 'Pastures Team',
  date: '2026-01-05',
  readTime: '5 min read',
  category: 'features',
  tags: ['prayer life', 'intercession', 'spiritual journal', 'audio prayer', 'testimony'],
  content: `
We often tell our friends, "I'll pray for you." But how often do we see the full picture of how God answers those prayers? In **Pastures**, we built the **People Journey** feature to help you intercede intentionally.

## Journeys: Your Relational Timeline

As you journal, Pastures detects the people you mention and weaves them into a specific **Journey**.

<img src="/blog-assets/people-journey-timeline.png" alt="A timeline showing a history of interactions and prayers for a specific person in the Pastures app" class="w-1/2 mx-auto rounded-lg shadow-lg my-8" />

Instead of digging through scattered entries, you can see a chronological view of your intercession for a friend.

## The Power of Recorded Prayer

We've introduced **Audio Prayer Recording** directly within these Journeys.
<img src="/blog-assets/audio-prayer-ui.png" alt="The interface for recording an audio prayer for a friend in Pastures" class="w-1/2 mx-auto rounded-lg shadow-lg my-8" />

### Why Record Your Prayers?
Recording your voice captures the emotion and urgency in a way that text sometimes cannot. The **Psalms** are essentially recorded prayers, preserved for generations.

> "I love the LORD, for he heard my voice; he heard my cry for mercy." - Psalm 116:1-2

## Seeing God's Sovereignty in Hindsight

The real beauty is seeing the prayer directly preceding the answer, mapped out on a timeline. It gives you a front-row seat to **God's Sovereignty** in your life and relationships.

Try it out this week in the **Journeys** section of the app. Let's move from saying "I'll pray for you" to building a history of God's faithfulness.

---

*"I thank my God every time I remember you..." - Philippians 1:3-4*
  `
},
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

