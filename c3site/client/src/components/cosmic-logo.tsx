import logoImage from "@assets/C3 Logo v1.2_1758634969763.png";

interface CosmicLogoProps {
  size?: number;
  showText?: boolean;
}

export default function CosmicLogo({ size = 256, showText = true }: CosmicLogoProps) {
  return (
    <div className="relative flex flex-col items-center justify-center" style={{ width: size, height: size }}>
      <img 
        src={logoImage} 
        alt="C3 Alliance Logo"
        className="w-full h-auto max-w-full max-h-full object-contain"
        style={{ maxWidth: size, maxHeight: showText ? size * 0.8 : size }}
      />
      
      {/* Alliance Text */}
      {showText && (
        <div className="mt-4 text-xs text-muted-foreground tracking-widest font-semibold">
          ALLIANCE
        </div>
      )}
    </div>
  );
}
