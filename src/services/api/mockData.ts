export const mockData = {
  programs: [
    {
      id: '1',
      title: 'iOS Development Regular',
      type: 'regular' as const,
      duration: '12 weeks',
      price: 12000000,
      features: [
        'Full-time intensive program',
        'Live mentoring sessions',
        'Real-world projects',
        'Career support',
        'Industry certification',
        'Networking opportunities'
      ]
    },
    {
      id: '2',
      title: 'iOS Development Part-time',
      type: 'parttime' as const,
      duration: '24 weeks',
      price: 8000000,
      features: [
        'Flexible schedule',
        'Weekend mentoring',
        'Hands-on projects',
        'Online resources',
        'Community access',
        'Certificate of completion'
      ]
    }
  ],
  testimonials: [
    {
      id: '1',
      name: 'Sarah Johnson',
      role: 'iOS Developer',
      company: 'Gojek',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80',
      testimonial: 'The iOS Academy bootcamp transformed my career. The hands-on projects and mentorship were invaluable in helping me land my dream job at Gojek.'
    },
    {
      id: '2',
      name: 'Michael Chen',
      role: 'Senior iOS Engineer',
      company: 'Tokopedia',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80',
      testimonial: 'After completing the part-time program while working, I was able to transition into a senior iOS role. The curriculum is practical and up-to-date.'
    },
    {
      id: '3',
      name: 'Amanda Putri',
      role: 'Mobile Developer',
      company: 'Traveloka',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80',
      testimonial: 'The bootcamp provided me with a solid foundation in iOS development. The career support team helped me connect with top companies in Indonesia.'
    }
  ],
  partners: [
    {
      id: '1',
      name: 'Gojek',
      logo: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80',
      description: 'Leading technology company revolutionizing on-demand services',
      employees: '100+',
      location: 'Jakarta, Indonesia'
    },
    {
      id: '2',
      name: 'Tokopedia',
      logo: 'https://images.unsplash.com/photo-1554774853-719586f82d77?ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80',
      description: 'Indonesia\'s largest e-commerce platform',
      employees: '50+',
      location: 'Jakarta, Indonesia'
    },
    {
      id: '3',
      name: 'Traveloka',
      logo: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80',
      description: 'Leading travel and lifestyle booking platform in Southeast Asia',
      employees: '75+',
      location: 'Jakarta, Indonesia'
    },
    {
      id: '4',
      name: 'Bukalapak',
      logo: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80',
      description: 'One of Indonesia\'s largest technology companies',
      employees: '40+',
      location: 'Jakarta, Indonesia'
    }
  ],
  materials: [
    {
      id: '1',
      title: 'Swift Fundamentals',
      description: 'Master the basics of Swift programming language',
      icon: 'code' as const,
      duration: 20,
      lessons: 15,
      learningPoints: [
        'Swift syntax and basic concepts',
        'Variables, constants, and data types',
        'Control flow and functions',
        'Object-oriented programming in Swift',
        'Protocol-oriented programming',
        'Error handling and optionals'
      ],
      content: [
        {
          title: 'Getting Started with Swift',
          topics: [
            'Introduction to Swift',
            'Setting up your development environment',
            'Swift Playgrounds',
            'Basic syntax and operators'
          ]
        },
        {
          title: 'Swift Basics',
          topics: [
            'Variables and constants',
            'Data types',
            'Type inference and type safety',
            'String and characters'
          ]
        },
        {
          title: 'Control Flow',
          topics: [
            'Conditional statements',
            'Loops and iterations',
            'Switch statements',
            'Pattern matching'
          ]
        }
      ],
      videoCourses: [
        {
          id: 'v1',
          title: 'Introduction to Swift Programming',
          description: 'Learn the fundamentals of Swift programming language with practical examples.',
          youtubeId: 'comQ1-x2a1Q',
          duration: '15:30',
          instructor: 'John Smith',
          level: 'beginner'
        },
        {
          id: 'v2',
          title: 'Swift Object-Oriented Programming',
          description: 'Deep dive into object-oriented programming concepts in Swift.',
          youtubeId: 'comQ1-x2a1Q',
          duration: '20:45',
          instructor: 'Sarah Johnson',
          level: 'intermediate'
        },
        {
          id: 'v3',
          title: 'Advanced Swift Protocols',
          description: 'Master protocol-oriented programming in Swift.',
          youtubeId: 'comQ1-x2a1Q',
          duration: '25:15',
          instructor: 'Mike Chen',
          level: 'advanced'
        }
      ]
    },
    {
      id: '2',
      title: 'iOS UI Development',
      description: 'Learn to create beautiful and responsive iOS user interfaces',
      icon: 'layout' as const,
      duration: 25,
      lessons: 18,
      learningPoints: [
        'UIKit fundamentals',
        'Auto Layout and constraints',
        'View controllers and navigation',
        'Custom UI components',
        'Animations and transitions',
        'Responsive design patterns'
      ],
      content: [
        {
          title: 'UIKit Basics',
          topics: [
            'Understanding UIKit',
            'View hierarchy',
            'Common UI controls',
            'Working with storyboards'
          ]
        },
        {
          title: 'Layout and Constraints',
          topics: [
            'Auto Layout fundamentals',
            'Creating constraints programmatically',
            'Stack views',
            'Dynamic layouts'
          ]
        }
      ],
      videoCourses: [
        {
          id: 'v4',
          title: 'UIKit Fundamentals',
          description: 'Learn the basics of UIKit and iOS interface development.',
          youtubeId: 'comQ1-x2a1Q',
          duration: '18:20',
          instructor: 'John Smith',
          level: 'beginner'
        },
        {
          id: 'v5',
          title: 'Advanced Auto Layout',
          description: 'Master Auto Layout and responsive UI design.',
          youtubeId: 'comQ1-x2a1Q',
          duration: '22:15',
          instructor: 'Sarah Johnson',
          level: 'intermediate'
        },
        {
          id: 'v6',
          title: 'Custom UI Components',
          description: 'Create reusable custom UI components in iOS.',
          youtubeId: 'comQ1-x2a1Q',
          duration: '19:45',
          instructor: 'Mike Chen',
          level: 'advanced'
        }
      ]
    },
    {
      id: '3',
      title: 'iOS App Architecture',
      description: 'Build robust and maintainable iOS applications',
      icon: 'terminal' as const,
      duration: 30,
      lessons: 20,
      learningPoints: [
        'MVC, MVVM, and Clean Architecture',
        'Design patterns in iOS',
        'Dependency injection',
        'Unit testing and TDD',
        'App lifecycle management',
        'Performance optimization'
      ],
      content: [
        {
          title: 'Architectural Patterns',
          topics: [
            'MVC in iOS',
            'MVVM implementation',
            'Clean Architecture principles',
            'Choosing the right architecture'
          ]
        },
        {
          title: 'Design Patterns',
          topics: [
            'Common iOS design patterns',
            'Singleton pattern',
            'Observer pattern',
            'Factory pattern'
          ]
        }
      ],
      videoCourses: [
        {
          id: 'v7',
          title: 'iOS Architecture Patterns',
          description: 'Understanding different architectural patterns in iOS development.',
          youtubeId: 'comQ1-x2a1Q',
          duration: '23:10',
          instructor: 'John Smith',
          level: 'intermediate'
        },
        {
          id: 'v8',
          title: 'MVVM in Practice',
          description: 'Implementing MVVM architecture in iOS applications.',
          youtubeId: 'comQ1-x2a1Q',
          duration: '26:30',
          instructor: 'Sarah Johnson',
          level: 'advanced'
        },
        {
          id: 'v9',
          title: 'Clean Architecture',
          description: 'Applying Clean Architecture principles in iOS development.',
          youtubeId: 'comQ1-x2a1Q',
          duration: '28:45',
          instructor: 'Mike Chen',
          level: 'advanced'
        }
      ]
    },
    {
      id: '4',
      title: 'Data Persistence',
      description: 'Learn different ways to store and manage data in iOS apps',
      icon: 'database' as const,
      duration: 15,
      lessons: 12,
      learningPoints: [
        'UserDefaults and property lists',
        'Core Data fundamentals',
        'SQLite and Realm',
        'File system operations',
        'Data migration strategies',
        'Cloud synchronization'
      ],
      content: [
        {
          title: 'Local Storage',
          topics: [
            'UserDefaults basics',
            'Working with property lists',
            'File system operations',
            'Data serialization'
          ]
        },
        {
          title: 'Core Data',
          topics: [
            'Core Data stack',
            'Data modeling',
            'CRUD operations',
            'Relationships and migrations'
          ]
        }
      ],
      videoCourses: [
        {
          id: 'v10',
          title: 'iOS Data Persistence Basics',
          description: 'Introduction to different data storage options in iOS.',
          youtubeId: 'comQ1-x2a1Q',
          duration: '16:40',
          instructor: 'John Smith',
          level: 'beginner'
        },
        {
          id: 'v11',
          title: 'Core Data Mastery',
          description: 'Deep dive into Core Data framework and its features.',
          youtubeId: 'comQ1-x2a1Q',
          duration: '24:20',
          instructor: 'Sarah Johnson',
          level: 'intermediate'
        },
        {
          id: 'v12',
          title: 'Cloud Sync Strategies',
          description: 'Implementing cloud synchronization in iOS apps.',
          youtubeId: 'comQ1-x2a1Q',
          duration: '21:15',
          instructor: 'Mike Chen',
          level: 'advanced'
        }
      ]
    }
  ],
  users: [
    {
      id: '1',
      email: 'demo@example.com',
      password: 'demo123',
      name: 'Demo User'
    }
  ],
  projects: [
    {
      id: '1',
      title: 'SwiftUI Weather App',
      description: 'A beautiful weather application built with SwiftUI featuring real-time weather updates, detailed forecasts, and animated weather conditions. Implements MVVM architecture and combines multiple weather APIs.',
      image: 'https://images.unsplash.com/photo-1601134467661-3d775b999c8b?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80',
      technologies: ['SwiftUI', 'Combine', 'CoreLocation', 'WeatherKit'],
      githubUrl: 'https://github.com/demo/weather-app',
      demoUrl: 'https://apps.apple.com/demo/weather-app',
      author: {
        name: 'Sarah Johnson',
        batch: 'Batch 12',
        avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80'
      }
    },
    {
      id: '2',
      title: 'iOS Food Delivery',
      description: 'A comprehensive food delivery application with real-time order tracking, payment integration, and a sophisticated recommendation system. Features clean architecture and advanced animations.',
      image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80',
      technologies: ['UIKit', 'CoreData', 'MapKit', 'Firebase'],
      githubUrl: 'https://github.com/demo/food-delivery',
      demoUrl: 'https://apps.apple.com/demo/food-delivery',
      author: {
        name: 'Michael Chen',
        batch: 'Batch 11',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80'
      }
    },
    {
      id: '3',
      title: 'Fitness Tracker Pro',
      description: 'A comprehensive fitness tracking app that integrates with HealthKit, features custom workout plans, and provides detailed analytics. Includes social features for workout sharing and challenges.',
      image: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80',
      technologies: ['SwiftUI', 'HealthKit', 'CoreML', 'CloudKit'],
      githubUrl: 'https://github.com/demo/fitness-tracker',
      author: {
        name: 'Amanda Putri',
        batch: 'Batch 13',
        avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80'
      }
    }
  ]
};