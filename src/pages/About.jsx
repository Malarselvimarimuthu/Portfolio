import { useEffect } from 'react';

const AboutSection = () => {
  const colors = {
    background: '#0A0B1A',
    turquoise: '#7FFFD4',
    cardBg: '#1A1B3A',
    cardHover: '#2A2B4A',
    textPrimary: '#FFFFFF',
    textSecondary: '#B0B0B0'
  };

  const beliefs = [
    "✨ Continuous learning",
    "🚀 Building robust backend systems",
    "☁️ Cloud-first thinking",
    "🎭 Express through public speaking",
    "🚀 Code with rhythm, live with melody",
    "😊 Keeping a positive attitude"
  ];

  const contactLinks = [
    {
      icon: "📧",
      label: "Email",
      link: "https://mail.google.com/mail/?view=cm&fs=1&to=malarmarimuthu2005@gmail.com",
      color: "#EA4335"
    },
    {
      icon: "💼",
      label: "LinkedIn",
      link: "https://www.linkedin.com/in/malarselvi-m/",
      color: "#0A66C2"
    },
    {
      icon: "💻",
      label: "GitHub",
      link: "https://github.com/Malarselvimarimuthu/",
      color: "#2DBA4E"
    },
    {
      icon: "🏆",
      label: "LeetCode",
      link: "https://leetcode.com/u/Malarselvi/",
      color: "#FFA116"
    },
    {
      icon: "📄",
      label: "Resume",
      link: "https://drive.google.com/file/d/1UiHaIs9vA-E4W3yCNAXKQT-hHNCEgM8x/view?usp=sharing",
      color: "#00A0DC"
    }
  ];

  return (
    <div style={{ 
      backgroundColor: colors.background,
      minHeight: '100vh',
      padding: '2rem',
      color: colors.turquoise
    }}>
      {/* Header Section */}
      <div style={{
        maxWidth: '64rem',
        margin: '0 auto 3rem',
        textAlign: 'center',
        animation: 'fadeIn 1s ease-in'
      }}>
        <h1 style={{
          fontSize: '2.5rem',
          fontWeight: 'bold',
          marginBottom: '1rem'
        }}>
           Thanks for stopping by! 👋
        </h1>
        <p style={{
          fontSize: '1.25rem',
          color: colors.textPrimary
        }}>
          
          Feel free to explore and connect with me through any of the platforms below. ✨
        </p>
      </div>

      {/* Main Content Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '2rem',
        maxWidth: '64rem',
        margin: '0 auto'
      }}>
        {/* Left Side - Beliefs */}
        <div style={{
          background: colors.cardBg,
          padding: '2rem',
          borderRadius: '1rem',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
        }}>
          <h2 style={{
            fontSize: '1.5rem',
            color: colors.turquoise,
            marginBottom: '1.5rem'
          }}>
            What I Believe In
          </h2>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem'
          }}>
            {beliefs.map((belief, index) => (
              <div
                key={index}
                style={{
                  background: colors.cardHover,
                  padding: '1rem',
                  borderRadius: '0.5rem',
                  borderLeft: `4px solid ${colors.turquoise}`,
                  transition: 'all 0.3s ease',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateX(10px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateX(0)';
                }}
              >
                <p style={{ color: colors.textPrimary }}>{belief}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side - Contact Info */}
        <div style={{
          background: colors.cardBg,
          padding: '2rem',
          borderRadius: '1rem',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
        }}>
          <h2 style={{
            fontSize: '1.5rem',
            color: colors.turquoise,
            marginBottom: '1.5rem'
          }}>
            Let's Connect
          </h2>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem'
          }}>
            {contactLinks.map((contact, index) => (
              <a
                key={index}
                href={contact.link}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  background: colors.cardHover,
                  padding: '1rem',
                  borderRadius: '0.5rem',
                  color: colors.textPrimary,
                  textDecoration: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  transition: 'all 0.3s ease',
                  borderLeft: `4px solid ${contact.color}`
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateX(10px)';
                  e.currentTarget.style.background = contact.color + '33';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateX(0)';
                  e.currentTarget.style.background = colors.cardHover;
                }}
              >
                <span style={{ fontSize: '1.5rem' }}>{contact.icon}</span>
                <span>{contact.label}</span>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Section - Fun Fact */}
      <div style={{
        maxWidth: '64rem',
        margin: '3rem auto 0',
        background: colors.cardBg,
        padding: '2rem',
        borderRadius: '1rem',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        animation: 'fadeIn 1s ease-in'
      }}>
        <h2 style={{
          fontSize: '1.5rem',
          fontWeight: 'bold',
          marginBottom: '1rem',
          color: colors.turquoise
        }}>
          Fun fact:
        </h2>
        <p style={{
          fontSize: '1.125rem',
          color: colors.textPrimary
        }}>
          When I'm not deploying code, I'm either preparing for my next talk or creating the perfect coding playlist! 🎧
        </p>
      </div>
    </div>
  );
};

export default AboutSection;