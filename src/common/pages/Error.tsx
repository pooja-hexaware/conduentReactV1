import { Typography } from "@mui/material";


const ErrorFallback = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <Typography variant="h3">Something Went Wrong</Typography>
      <Typography variant="h4">Contact Administrator</Typography>
      <a href="/">Back to Home</a>
    </div>
  );
};

export default ErrorFallback;
