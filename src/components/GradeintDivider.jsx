// components/GradientDivider.jsx

const GradientDivider = () => {
    return (
      <div className="w-full h-[2px] relative overflow-hidden my-8">
        <div className="absolute w-full h-full"
          style={{
            background: 'linear-gradient(90deg, transparent 0%, #7FFFD4 20%, #FFFFFF 50%, #7FFFD4 80%, transparent 100%)',
            animation: 'shimmer 3s infinite linear'
          }}
        />
        <style jsx>{`
          @keyframes shimmer {
            0% {
              transform: translateX(-100%);
            }
            100% {
              transform: translateX(100%);
            }
          }
        `}</style>
      </div>
    );
  };
  
  export default GradientDivider;