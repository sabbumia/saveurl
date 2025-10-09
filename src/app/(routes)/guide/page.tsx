'use client'
import React, { useState } from 'react';
import { 
  User, Link as LinkIcon, Eye, EyeOff, Users, Share2, 
  Save, Search, Filter, Star, Trash2, Copy, CheckCircle,
  Mail, Lock, UserPlus, LogIn, Plus, Grid, Settings,
  ChevronDown, ChevronRight, ExternalLink, Shield
} from 'lucide-react';

export default function HowToUseGuide() {
  const [openSection, setOpenSection] = useState<number | null>(1);
  const [activeTab, setActiveTab] = useState('signup');

  const toggleSection = (section: number) => {
    setOpenSection(openSection === section ? null : section);
  };

  const sections = [
    {
      id: 1,
      title: "Getting Started: Sign Up & Log In",
      icon: User,
      color: "from-purple-500 to-pink-500",
      content: (
        <div className="space-y-6">
          <div className="flex gap-2 mb-6">
            <button
              onClick={() => setActiveTab('signup')}
              className={`px-4 py-2 rounded-lg font-semibold transition-all ${
                activeTab === 'signup' 
                  ? 'bg-purple-500 text-white' 
                  : 'bg-white/10 text-gray-300 hover:bg-white/20'
              }`}
            >
              Sign Up
            </button>
            <button
              onClick={() => setActiveTab('login')}
              className={`px-4 py-2 rounded-lg font-semibold transition-all ${
                activeTab === 'login' 
                  ? 'bg-purple-500 text-white' 
                  : 'bg-white/10 text-gray-300 hover:bg-white/20'
              }`}
            >
              Log In
            </button>
          </div>

          {activeTab === 'signup' ? (
            <div className="space-y-4">
              <div className="flex items-start gap-3 bg-white/5 p-4 rounded-xl border border-white/10">
                <div className="bg-purple-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0">1</div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Visit the Sign Up Page</h4>
                  <p className="text-gray-300 text-sm">Click on the "Sign Up" button on the homepage to get started.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-white/5 p-4 rounded-xl border border-white/10">
                <div className="bg-purple-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0">2</div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Enter Your Details</h4>
                  <p className="text-gray-300 text-sm mb-2">Fill in your name, email, and create a secure password.</p>
                  <div className="bg-slate-900/50 p-3 rounded-lg border border-white/10">
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center gap-2 text-gray-400">
                        <User className="w-4 h-4" />
                        <span>Full Name</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-400">
                        <Mail className="w-4 h-4" />
                        <span>Email Address</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-400">
                        <Lock className="w-4 h-4" />
                        <span>Password</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-white/5 p-4 rounded-xl border border-white/10">
                <div className="bg-purple-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0">3</div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Verify Your Email</h4>
                  <p className="text-gray-300 text-sm mb-2">Check your email for a 6-digit verification code and enter it to confirm your account.</p>
                  <div className="bg-green-500/20 border border-green-500/30 p-3 rounded-lg">
                    <p className="text-green-300 text-sm flex items-center gap-2">
                      <CheckCircle className="w-4 h-4" />
                      Account created successfully!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="flex items-start gap-3 bg-white/5 p-4 rounded-xl border border-white/10">
                <div className="bg-purple-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0">1</div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Click "Log In"</h4>
                  <p className="text-gray-300 text-sm">If you already have an account, click the "Log In" button on the homepage.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-white/5 p-4 rounded-xl border border-white/10">
                <div className="bg-purple-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0">2</div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Enter Credentials</h4>
                  <p className="text-gray-300 text-sm">Enter your email and password to access your dashboard.</p>
                </div>
              </div>

              <div className="bg-blue-500/20 border border-blue-500/30 p-4 rounded-xl">
                <p className="text-blue-200 text-sm flex items-start gap-2">
                  <Shield className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>Forgot your password? Click "Forgot Password" on the login page to reset it.</span>
                </p>
              </div>
            </div>
          )}
        </div>
      )
    },
    {
      id: 2,
      title: "Saving Your First Link",
      icon: Save,
      color: "from-blue-500 to-cyan-500",
      content: (
        <div className="space-y-4">
          <div className="flex items-start gap-3 bg-white/5 p-4 rounded-xl border border-white/10">
            <div className="bg-blue-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0">1</div>
            <div className="flex-1">
              <h4 className="text-white font-semibold mb-1">Access the Link Save Form</h4>
              <p className="text-gray-300 text-sm mb-3">After logging in, you'll see the link save form. Fill in the following details:</p>
              
              <div className="space-y-3 bg-slate-900/50 p-4 rounded-lg border border-white/10">
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-purple-300 font-semibold text-sm">
                    <LinkIcon className="w-4 h-4" />
                    Link URL <span className="text-red-400">*</span>
                  </div>
                  <p className="text-gray-400 text-xs ml-6">The website URL you want to save</p>
                </div>

                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-purple-300 font-semibold text-sm">
                    <ExternalLink className="w-4 h-4" />
                    Source <span className="text-red-400">*</span>
                  </div>
                  <p className="text-gray-400 text-xs ml-6">Choose from: YouTube, Facebook, LinkedIn, Twitter, GitHub, etc.</p>
                </div>

                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-purple-300 font-semibold text-sm">
                    <Grid className="w-4 h-4" />
                    Categories <span className="text-red-400">*</span>
                  </div>
                  <p className="text-gray-400 text-xs ml-6">Select: Education, Music, Movies, Tech, News, Documents, etc.</p>
                </div>

                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-purple-300 font-semibold text-sm">
                    <Plus className="w-4 h-4" />
                    Description (Optional)
                  </div>
                  <p className="text-gray-400 text-xs ml-6">Add context to help you remember why you saved it</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-start gap-3 bg-white/5 p-4 rounded-xl border border-white/10">
            <div className="bg-blue-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0">2</div>
            <div className="flex-1">
              <h4 className="text-white font-semibold mb-1">Set Visibility</h4>
              <p className="text-gray-300 text-sm mb-3">Choose how you want to share your link:</p>
              
              <div className="space-y-2">
                <div className="bg-slate-900/50 p-3 rounded-lg border border-white/10 flex items-start gap-3">
                  <EyeOff className="w-5 h-5 text-gray-400 mt-0.5" />
                  <div>
                    <h5 className="text-white font-semibold text-sm">Private</h5>
                    <p className="text-gray-400 text-xs">Only you can see this link. Perfect for personal use.</p>
                  </div>
                </div>

                <div className="bg-slate-900/50 p-3 rounded-lg border border-white/10 flex items-start gap-3">
                  <Eye className="w-5 h-5 text-green-400 mt-0.5" />
                  <div>
                    <h5 className="text-white font-semibold text-sm">Public</h5>
                    <p className="text-gray-400 text-xs">Anyone can view this link, even without logging in.</p>
                  </div>
                </div>

                <div className="bg-slate-900/50 p-3 rounded-lg border border-white/10 flex items-start gap-3">
                  <Users className="w-5 h-5 text-blue-400 mt-0.5" />
                  <div>
                    <h5 className="text-white font-semibold text-sm">Group</h5>
                    <p className="text-gray-400 text-xs">Share with specific group members only.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-start gap-3 bg-white/5 p-4 rounded-xl border border-white/10">
            <div className="bg-blue-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0">3</div>
            <div>
              <h4 className="text-white font-semibold mb-1">Save Your Link</h4>
              <p className="text-gray-300 text-sm">Click the "Save" button and your link will be saved instantly!</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 3,
      title: "Managing Your Saved Links",
      icon: Grid,
      color: "from-green-500 to-emerald-500",
      content: (
        <div className="space-y-4">
          <div className="bg-white/5 p-4 rounded-xl border border-white/10">
            <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
              <Search className="w-5 h-5 text-green-400" />
              View & Filter Links
            </h4>
            <p className="text-gray-300 text-sm mb-4">Access your dashboard to view all saved links with powerful filtering options:</p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="bg-slate-900/50 p-3 rounded-lg border border-white/10">
                <div className="flex items-center gap-2 text-purple-300 font-semibold text-sm mb-1">
                  <Search className="w-4 h-4" />
                  Search
                </div>
                <p className="text-gray-400 text-xs">Search by title, description, tags, or URL</p>
              </div>

              <div className="bg-slate-900/50 p-3 rounded-lg border border-white/10">
                <div className="flex items-center gap-2 text-purple-300 font-semibold text-sm mb-1">
                  <Filter className="w-4 h-4" />
                  Filter
                </div>
                <p className="text-gray-400 text-xs">Filter by category, source, or visibility</p>
              </div>

              <div className="bg-slate-900/50 p-3 rounded-lg border border-white/10">
                <div className="flex items-center gap-2 text-purple-300 font-semibold text-sm mb-1">
                  <Star className="w-4 h-4" />
                  Favorites
                </div>
                <p className="text-gray-400 text-xs">Mark links as favorites for quick access</p>
              </div>

              <div className="bg-slate-900/50 p-3 rounded-lg border border-white/10">
                <div className="flex items-center gap-2 text-purple-300 font-semibold text-sm mb-1">
                  <Grid className="w-4 h-4" />
                  View Modes
                </div>
                <p className="text-gray-400 text-xs">Switch between grid and list views</p>
              </div>
            </div>
          </div>

          <div className="bg-white/5 p-4 rounded-xl border border-white/10">
            <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
              <Settings className="w-5 h-5 text-green-400" />
              Link Actions
            </h4>
            
            <div className="space-y-2">
              <div className="flex items-center gap-3 bg-slate-900/50 p-3 rounded-lg border border-white/10">
                <Copy className="w-4 h-4 text-blue-400" />
                <span className="text-gray-300 text-sm">Copy link URL to clipboard</span>
              </div>

              <div className="flex items-center gap-3 bg-slate-900/50 p-3 rounded-lg border border-white/10">
                <Star className="w-4 h-4 text-yellow-400" />
                <span className="text-gray-300 text-sm">Add or remove from favorites</span>
              </div>

              <div className="flex items-center gap-3 bg-slate-900/50 p-3 rounded-lg border border-white/10">
                <Trash2 className="w-4 h-4 text-red-400" />
                <span className="text-gray-300 text-sm">Delete individual or multiple links</span>
              </div>
            </div>
          </div>

          <div className="bg-blue-500/20 border border-blue-500/30 p-4 rounded-xl">
            <p className="text-blue-200 text-sm flex items-start gap-2">
              <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
              <span>You can select multiple links at once for bulk operations like deleting or exporting!</span>
            </p>
          </div>
        </div>
      )
    },
    {
      id: 4,
      title: "Creating & Managing Groups",
      icon: Users,
      color: "from-orange-500 to-red-500",
      content: (
        <div className="space-y-4">
          <div className="flex items-start gap-3 bg-white/5 p-4 rounded-xl border border-white/10">
            <div className="bg-orange-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0">1</div>
            <div>
              <h4 className="text-white font-semibold mb-1">Create a New Group</h4>
              <ul className="text-gray-300 text-sm space-y-2 mt-2">
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-4 h-4 text-orange-400 mt-0.5 flex-shrink-0" />
                  <span>Navigate to the "Groups" section from Navbar</span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-4 h-4 text-orange-400 mt-0.5 flex-shrink-0" />
                  <span>Click "Create New Group" button</span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-4 h-4 text-orange-400 mt-0.5 flex-shrink-0" />
                  <span>Give your group a name and optional description</span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-4 h-4 text-orange-400 mt-0.5 flex-shrink-0" />
                  <span>Invite members by entering their email addresses</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex items-start gap-3 bg-white/5 p-4 rounded-xl border border-white/10">
            <div className="bg-orange-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0">2</div>
            <div>
              <h4 className="text-white font-semibold mb-1">Manage Group Members</h4>
              <p className="text-gray-300 text-sm mb-3">From the group page, you can:</p>
              
              <div className="space-y-2">
                <div className="bg-slate-900/50 p-3 rounded-lg border border-white/10 flex items-center gap-3">
                  <UserPlus className="w-5 h-5 text-green-400" />
                  <span className="text-gray-300 text-sm">Add new members by email</span>
                </div>

                <div className="bg-slate-900/50 p-3 rounded-lg border border-white/10 flex items-center gap-3">
                  <Trash2 className="w-5 h-5 text-red-400" />
                  <span className="text-gray-300 text-sm">Remove members from the group</span>
                </div>

                <div className="bg-slate-900/50 p-3 rounded-lg border border-white/10 flex items-center gap-3">
                  <Share2 className="w-5 h-5 text-blue-400" />
                  <span className="text-gray-300 text-sm">Share links with all group members</span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-start gap-3 bg-white/5 p-4 rounded-xl border border-white/10">
            <div className="bg-orange-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0">3</div>
            <div>
              <h4 className="text-white font-semibold mb-1">Share Links in Groups</h4>
              <p className="text-gray-300 text-sm">When saving a link, select "Group" visibility and choose which group to share with. Only group members will be able to view these links.</p>
            </div>
          </div>

          <div className="bg-purple-500/20 border border-purple-500/30 p-4 rounded-xl">
            <p className="text-purple-200 text-sm flex items-start gap-2">
              <Users className="w-4 h-4 mt-0.5 flex-shrink-0" />
              <span>Perfect for teams, study groups, or families who want to share curated link collections!</span>
            </p>
          </div>
        </div>
      )
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950 py-12 px-4 sm:px-6 lg:px-8">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{animationDelay: '1.5s'}}></div>
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl mb-6 shadow-2xl shadow-purple-500/50">
            <LinkIcon className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            How to Use SaveUrURL
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Your complete guide to saving, managing, and sharing links like a pro
          </p>
        </div>
        {/* Main Content - Accordion */}
        <div className="space-y-4">
          {sections.map((section) => {
            const Icon = section.icon;
            const isOpen = openSection === section.id;
            
            return (
              <div
                key={section.id}
                className="bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 overflow-hidden transition-all duration-300 hover:border-white/30"
              >
                <button
                  onClick={() => toggleSection(section.id)}
                  className="w-full p-6 flex items-center justify-between text-left hover:bg-white/5 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${section.color} flex items-center justify-center shadow-lg`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h2 className="text-xl font-bold text-white">{section.title}</h2>
                    </div>
                  </div>
                  <ChevronDown
                    className={`w-6 h-6 text-gray-400 transition-transform duration-300 ${
                      isOpen ? 'transform rotate-180' : ''
                    }`}
                  />
                </button>
                
                {isOpen && (
                  <div className="px-6 pb-6 animate-slideDown">
                    {section.content}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* FAQ Section */}
        <div className="mt-12 bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 p-8">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-yellow-500 to-orange-500 flex items-center justify-center">
              <span className="text-2xl">❓</span>
            </div>
            Frequently Asked Questions
          </h2>
          
          <div className="space-y-4">
            <div className="bg-white/5 p-4 rounded-xl border border-white/10">
              <h3 className="text-white font-semibold mb-2">Can I save links from any website?</h3>
              <p className="text-gray-300 text-sm">Yes! You can save any link as long as you have the URL.</p>
            </div>

            <div className="bg-white/5 p-4 rounded-xl border border-white/10">
              <h3 className="text-white font-semibold mb-2">Can I edit or delete saved links?</h3>
              <p className="text-gray-300 text-sm">Absolutely! You can edit descriptions, categories, or delete any link from your saved list.</p>
            </div>

            <div className="bg-white/5 p-4 rounded-xl border border-white/10">
              <h3 className="text-white font-semibold mb-2">How do I know if a link is public or private?</h3>
              <p className="text-gray-300 text-sm">Each link has a visibility icon. Public links show an eye icon, private links show an eye-off icon, and group links show a share icon.</p>
            </div>

            <div className="bg-white/5 p-4 rounded-xl border border-white/10">
              <h3 className="text-white font-semibold mb-2">What if I forget my password?</h3>
              <p className="text-gray-300 text-sm">Click the "Forgot Password" link on the login page to reset it.</p>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="mt-12 bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-xl rounded-2xl border border-purple-500/30 p-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Need More Help?</h2>
          <p className="text-gray-300 mb-6">
            If you have any questions or need assistance, feel free to reach out!
          </p>
          <a
            href="mailto:sazzadhossainadib@gmail.com"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-xl font-semibold hover:from-purple-600 hover:to-pink-600 transition-all shadow-lg hover:scale-105"
          >
            <Mail className="w-5 h-5" />
            sazzadhossainadib@gmail.com
          </a>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-slideDown {
          animation: slideDown 0.3s ease-out;
        }
      `}</style>
    </div>
  );
}