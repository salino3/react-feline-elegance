export const useAppFunction = () => {
  const handleImgError = (
    e: React.SyntheticEvent<HTMLImageElement, Event>,
    vertical: boolean = true,
  ) => {
    // Access the underlying HTMLImageElement
    const target = e.currentTarget;

    // Set the fallback image URL
    target.src = `/images/errors-imgs/${vertical ? "cat-error-vertical" : "cat-error-horizontal"}.png`;

    // Optional: Prevent infinite loops if the fallback image also fails
    target.onerror = null;
  };

  return {
    handleImgError,
  };
};
