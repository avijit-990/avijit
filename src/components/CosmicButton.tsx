import { FileText, Facebook, Github, Linkedin } from 'lucide-react';

interface CosmicButtonProps {
  type: 'resume' | 'facebook' | 'github' | 'linkedin';
  onClick?: () => void;
  href?: string;
  label?: string;
}

export default function CosmicButton({ type, onClick, href, label }: CosmicButtonProps) {
  // Define platform-specific configurations
  const getConfig = () => {
    switch (type) {
      case 'resume':
        return {
          icon: FileText,
          defaultLabel: 'View Resume',
          url: href || '#',
        };
      case 'facebook':
        return {
          icon: Facebook,
          defaultLabel: 'Facebook',
          url: href || 'https://www.facebook.com/avijit8638',
        };
      case 'github':
        return {
          icon: Github,
          defaultLabel: 'GitHub',
          url: href || 'https://github.com/avijit-990',
        };
      case 'linkedin':
        return {
          icon: Linkedin,
          defaultLabel: 'LinkedIn',
          url: href || 'https://www.linkedin.com/in/avijit-karmokar-rony8638/',
        };
    }
  };

  const config = getConfig();
  const IconComponent = config.icon;
  const buttonLabel = label || config.defaultLabel;

  // Concentric circle elements and layout container structure
  const content = (
    <div className="cosmic-neon-pill-btn select-none">
      {/* Three pure CSS concentric sonar ripple circles */}
      <div className="cosmic-sonar-circle cosmic-sonar-circle-1" />
      <div className="cosmic-sonar-circle cosmic-sonar-circle-2" />
      <div className="cosmic-sonar-circle cosmic-sonar-circle-3" />

      {/* SVG brand vector icon representation */}
      <IconComponent size={14} strokeWidth={2.4} className="cosmic-brand-icon" />

      {/* Brand & Action labels beside logos */}
      <span>{buttonLabel}</span>
    </div>
  );

  const containerClass = "relative inline-block outline-none cursor-pointer p-1.5";

  if (onClick) {
    return (
      <button
        type="button"
        onClick={onClick}
        className={containerClass}
        style={{ WebkitTapHighlightColor: 'transparent' }}
      >
        {content}
      </button>
    );
  }

  return (
    <a
      href={config.url}
      target="_blank"
      rel="noopener noreferrer"
      className={containerClass}
      style={{ WebkitTapHighlightColor: 'transparent' }}
    >
      {content}
    </a>
  );
}
