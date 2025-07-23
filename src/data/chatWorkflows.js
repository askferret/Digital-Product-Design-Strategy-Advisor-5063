// Pre-defined chat workflows for demonstration purposes
export const chatWorkflows = {
  // Workflow 1: KPI Definition
  kpiDefinition: {
    initialQuestion: "How do we define measurable KPIs for our designs that meaningfully address the intersection of our business goals and user needs?",
    keywords: ['kpi', 'metrics', 'measure', 'business goals', 'user needs', 'measurable'],
    responses: [
      {
        id: 'kpi-response-1',
        content: `# Design KPI Framework

Based on your connected data sources and business context as a Series B HealthTech company, here's a structured approach for defining meaningful design KPIs:

## 1. Alignment Matrix

First, create a matrix that maps your business goals to user needs:

| Business Goal | User Need | Potential KPI |
|---------------|-----------|--------------|
| Increase revenue by 30% | Complete health assessments efficiently | Assessment completion rate |
| Reduce customer acquisition costs | Easy onboarding | First-time user completion rate |
| Expand enterprise clients | Complex workflow management | Task success rate for key workflows |

## 2. Layer-Based KPI Structure

I recommend organizing KPIs in three layers:

### Foundation Layer (Baseline Metrics)
- **Error rates**: Track where users encounter friction
- **Task completion times**: Measure efficiency improvements
- **SUS scores**: Baseline usability benchmarks

### Experience Layer (Engagement Metrics)
- **Feature adoption rates**: Which features drive engagement
- **Return visit frequency**: How design affects retention
- **Feature completion depth**: How far users progress

### Business Impact Layer (Outcome Metrics)
- **Conversion rate changes**: Direct business impact
- **Support ticket reduction**: Cost savings from better UX
- **Revenue per user segment**: Business outcome by design variant

## 3. Implementation Recommendations

Based on your Figma prototypes and Amplitude data:

1. Instrument key user pathways in your clinical dashboard
2. Create cohort comparisons for A/B tests of design changes
3. Set up weekly tracking dashboards that connect user behavior to business outcomes

Would you like me to dive deeper into setting up the tracking infrastructure or help prioritize which metrics to focus on first?`,
        type: 'assistant',
        timestamp: new Date()
      }
    ],
    followUpQuestions: [
      "How should we prioritize which KPIs to focus on first?",
      "What tools would you recommend for tracking design KPIs in healthcare?",
      "How frequently should we review design KPIs for our product?"
    ]
  },

  // Workflow 2: Measuring Design Impact
  designImpact: {
    initialQuestion: "How can we track and measure the direct impact of design choices on long-term engagement, especially when user behavior is influenced by factors outside our control?",
    keywords: ['track', 'measure', 'impact', 'design choices', 'engagement', 'seasonal', 'competitors', 'external factors'],
    responses: [
      {
        id: 'impact-response-1',
        content: `# Measuring Design Impact Amid External Factors

This is one of the most challenging aspects of design measurement. Based on your connected data and healthcare context, here's my strategic recommendation:

## 1. Isolation Framework

To separate design impact from external factors:

### Control Group Methodology
- **Cohort segmentation**: Create matched user groups exposed to different design variants
- **Holdout testing**: Keep a segment on the previous design as control
- **Gradual rollouts**: Use percentage-based exposure to isolate variables

### Seasonal Adjustment Models
I see in your Amplitude data strong monthly patterns for healthcare professionals. Implement:
- **Year-over-year comparisons** rather than month-over-month
- **Indexed performance metrics** against industry benchmarks
- **Trailing averages** to smooth out seasonal spikes

## 2. Multi-variate Attribution

Your user research shows multiple touchpoints affect engagement:
- **Attribution modeling**: Weight design changes against marketing campaigns
- **Path analysis**: Track user journeys across multiple sessions
- **Incrementality testing**: Measure marginal improvement from each design change

## 3. Leading Indicators Framework

Identify early signals that predict long-term engagement:

| Leading Indicator | Lagging Outcome | Correlation Strength |
|-------------------|-----------------|---------------------|
| Feature depth use in first week | 60-day retention | 0.72 (from your data) |
| Cross-feature navigation | Subscription renewal | 0.65 (from your data) |
| Data export frequency | Account expansion | 0.58 (from your data) |

## Implementation Plan

Based on your current analytics setup:
1. Configure segment tracking in Amplitude for design variants
2. Create a measurement dashboard that controls for external variables
3. Establish baseline metrics before each design change
4. Run A/A tests to validate measurement methodology

Would you like me to elaborate on any particular aspect of this approach?`,
        type: 'assistant',
        timestamp: new Date()
      }
    ],
    followUpQuestions: [
      "Can you explain more about A/A testing for design measurement?",
      "How large should our control groups be for statistical significance?",
      "What are the most common mistakes when measuring design impact?"
    ]
  },

  // Workflow 3: Balancing Short-term vs Long-term
  balancingNeeds: {
    initialQuestion: "How do we ensure our designs reflect both short-term user needs and long-term product strategy, especially when both are in tension?",
    keywords: ['short-term', 'long-term', 'balance', 'ux debt', 'backlog', 'strategy', 'immediate needs'],
    responses: [
      {
        id: 'balance-response-1',
        content: `# Balancing Immediate Needs vs. Strategic Design

This tension is particularly acute for Series B companies like yours. Based on your connected data sources and healthcare context, here's my strategic framework:

## 1. UX Debt Classification Matrix

First, categorize your UX debt to make informed decisions:

| Type | Impact | Technical Effort | Strategic Alignment |
|------|--------|------------------|---------------------|
| Critical Friction | High | Low | Medium |
| Visual Inconsistency | Low | Medium | High |
| Navigation Complexity | High | High | Medium |
| Feature Discoverability | Medium | Low | High |

## 2. Dual-Track Design System

Your Figma files show an opportunity for a two-tiered approach:

### Immediate Track (60% of resources)
- **Friction removal**: Focus on completion rates for key workflows
- **High-value quick wins**: Prioritize changes with high impact/low effort
- **Tactical improvements**: Address the top user complaints from your feedback data

### Strategic Track (40% of resources)
- **Component architecture**: Build scalable design system components
- **Platform thinking**: Design patterns that support your expansion roadmap
- **Consistent experience principles**: Establish guidelines for coherent experience

## 3. Implementation Strategy

Based on your team size and current sprint structure:

1. **Designate specific capacity** for both tracks in each sprint
2. **Create a UX debt backlog** separate from feature backlog
3. **Establish "design circuit breakers"** - triggers that shift resources when metrics drop
4. **Implement scaffolding patterns** - design for extensibility even in quick fixes

## 4. Decision Framework

When prioritizing work, apply this decision tree:
- If it blocks critical user journeys → Immediate fix
- If it affects <10% of users but creates future limitations → Strategic fix
- If it's high visibility but low functional impact → Bundle with strategic improvements
- If it's causing support tickets → Immediate fix with strategic consideration

Would you like me to create a more detailed prioritization framework specific to your product areas?`,
        type: 'assistant',
        timestamp: new Date()
      }
    ],
    followUpQuestions: [
      "How can we communicate the value of design system investment to stakeholders?",
      "What's a good ratio of design debt work to new feature development?",
      "How do we measure the ROI of our design system investments?"
    ]
  },

  // Workflow 4: Competitive Design Analysis
  competitiveAnalysis: {
    initialQuestion: "What's the most effective way to conduct a competitive design analysis for our healthcare platform that goes beyond just feature comparison?",
    keywords: ['competitive', 'analysis', 'comparison', 'competitors', 'healthcare platform', 'feature comparison'],
    responses: [
      {
        id: 'competitive-response-1',
        content: `# Strategic Competitive Design Analysis

Based on your healthcare platform and connected data sources, here's a comprehensive framework that goes well beyond feature comparison:

## 1. Multi-dimensional Analysis Framework

### Experience Layers Analysis
Rather than just features, map competitors across these dimensions:
- **Functional layer**: What capabilities are provided
- **Structural layer**: How information and navigation are organized
- **Behavioral layer**: How interactions and workflows function
- **Aesthetic layer**: Visual design, brand expression, emotion
- **Integration layer**: Ecosystem connections and extensibility

### Stakeholder-Specific Evaluation
From your user research, I see multiple stakeholders with different needs:

| Stakeholder | Primary Evaluation Criteria | Secondary Criteria |
|-------------|----------------------------|-------------------|
| Clinicians | Workflow efficiency, error prevention | Information density |
| Administrators | Reporting capabilities, user management | Customization |
| Patients | Simplicity, transparency | Education features |

## 2. Strategic Differentiation Mapping

Create a perceptual map that plots competitors on axes that matter:
- **Specialist vs. Generalist**
- **Clinical Focus vs. Administrative Focus**
- **Enterprise-oriented vs. SMB-oriented**
- **Data-rich vs. Simplicity-focused**

This helps identify strategic white space for differentiation.

## 3. Execution Methodology

Based on your team structure:
1. **Cross-functional competitive sprints**: 2-day intensive analysis sessions
2. **User journey shadowing**: Analyze competitor products through key user journeys
3. **Heuristic scoring**: Rate experiences on consistent criteria
4. **Strategic implications workshop**: Translate findings into actionable design strategy

## 4. Continuous Intelligence

Don't make this a one-time exercise:
- **Competitor experience monitoring**: Quarterly deep-dives on specific areas
- **Release tracking**: Monitor competitor updates for strategic shifts
- **Customer perception surveys**: Understand how users perceive your differentiation

I've analyzed the competitive landscape data you've connected and notice your biggest opportunity is in the clinical workflow optimization space, where competitors are focusing more on administrative features.

Would you like me to develop a specific competitive analysis plan focused on this area?`,
        type: 'assistant',
        timestamp: new Date()
      }
    ],
    followUpQuestions: [
      "How do we avoid being too reactive to competitor features?",
      "What tools would you recommend for tracking competitor design changes?",
      "How can we turn competitive insights into actionable design principles?"
    ]
  },

  // Workflow 5: Design System Scaling
  designSystemScaling: {
    initialQuestion: "Our design system is becoming unwieldy as we scale. How should we evolve it to support multiple products while maintaining consistency?",
    keywords: ['design system', 'scale', 'consistency', 'multiple products', 'unwieldy', 'evolve'],
    responses: [
      {
        id: 'design-system-response-1',
        content: `# Scaling Your Design System for Multi-Product Support

Based on your Figma files and team structure data, I can see you're experiencing growing pains with your design system. Here's my strategic recommendation:

## 1. Architectural Evolution

Your current design system appears to be a monolithic structure. Consider evolving to:

### Multi-tiered Architecture
- **Core Layer**: Foundational elements (colors, typography, spacing, grid)
- **Component Layer**: Base UI components with shared behaviors
- **Pattern Layer**: Assemblies of components for common workflows
- **Product Layer**: Product-specific adaptations and extensions

### Federation Model
For your multi-product environment:
- **Centralized governance** of core and component layers
- **Distributed ownership** of patterns and product layers
- **Contribution workflows** that allow teams to propose changes

## 2. Operational Framework

Your team structure suggests this approach:

| Layer | Ownership | Release Cadence | Change Process |
|-------|-----------|-----------------|---------------|
| Core | Design Systems Team | Quarterly | RFC + Review |
| Components | Design Systems Team | Monthly | RFC + Review |
| Patterns | Product Design Leads | Bi-weekly | Documentation |
| Product | Product Teams | As needed | Local governance |

## 3. Technical Implementation

Based on your current stack:
- **Token-based theming system** to support product variations
- **Component property API standardization** for consistent interfaces
- **Documentation as code** approach for maintainability
- **Automated testing suite** for visual regression and accessibility

## 4. Transition Strategy

I recommend a phased approach:
1. **Audit & Rationalize**: Eliminate duplicates, consolidate variations (2 weeks)
2. **Establish Core Architecture**: Define the multi-tiered model (4 weeks)
3. **Component Migration**: Move components to new architecture (8 weeks)
4. **Governance Implementation**: Establish tools and processes (4 weeks)
5. **Team Training**: Ensure adoption and contribution knowledge (ongoing)

## 5. Measurement Framework

Track these metrics to ensure success:
- **Design system usage rate** across products
- **Component adoption velocity**
- **Design debt creation rate**
- **Design implementation time** for new features
- **Consistency score** across product portfolio

Your Figma usage data suggests a 60% adoption rate of your current system. With this new approach, we should target 85%+ adoption within 3 months.

Would you like me to elaborate on any specific aspect of this strategy?`,
        type: 'assistant',
        timestamp: new Date()
      }
    ],
    followUpQuestions: [
      "How should we handle legacy components during the transition?",
      "What's the right team structure for managing a federated design system?",
      "How can we measure the business impact of our design system investment?"
    ]
  }
};

// Helper function to get workflow by question match
export const findWorkflowByQuestion = (question) => {
  // Convert question to lowercase for case-insensitive matching
  const lowercaseQuestion = question.toLowerCase();

  // Check each workflow for exact initial question match
  for (const [key, workflow] of Object.entries(chatWorkflows)) {
    if (workflow.initialQuestion.toLowerCase() === lowercaseQuestion) {
      return workflow;
    }
  }

  // Check for partial matches using keywords with better scoring
  let bestMatch = null;
  let bestScore = 0;

  for (const [key, workflow] of Object.entries(chatWorkflows)) {
    if (workflow.keywords) {
      const matchingKeywords = workflow.keywords.filter(keyword => 
        lowercaseQuestion.includes(keyword.toLowerCase())
      );
      
      const score = matchingKeywords.length / workflow.keywords.length;
      
      // Require at least 2 keyword matches or 40% match rate for better matching
      if ((matchingKeywords.length >= 2 || score >= 0.4) && score > bestScore) {
        bestScore = score;
        bestMatch = workflow;
      }
    }
  }

  return bestMatch;
};

// Get suggested follow-up questions based on conversation context
export const getSuggestedQuestions = (messages) => {
  if (messages.length === 0) {
    // Initial suggestions when no conversation has happened
    return [
      "How do we define measurable KPIs for our designs that meaningfully address the intersection of our business goals and user needs?",
      "How can we track and measure the direct impact of design choices on long-term engagement, especially when user behavior is influenced by factors outside our control?",
      "How do we ensure our designs reflect both short-term user needs and long-term product strategy, especially when both are in tension?",
      "What's the most effective way to conduct a competitive design analysis for our healthcare platform that goes beyond just feature comparison?"
    ];
  }

  // Get the last message content
  const lastMessage = messages[messages.length - 1];

  // If it's a predefined workflow and has follow-up questions, return those
  for (const workflow of Object.values(chatWorkflows)) {
    if (workflow.responses && workflow.responses.length > 0 && 
        lastMessage.content === workflow.responses[0].content) {
      return workflow.followUpQuestions;
    }
  }

  // Default follow-up questions
  return [
    "How do we measure the ROI of our design investments?",
    "What metrics should we track to evaluate design success?",
    "How can we align our design process with business objectives?",
    "What design patterns work best for healthcare workflows?"
  ];
};