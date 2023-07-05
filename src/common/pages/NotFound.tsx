import { Typography } from "@mui/material";
 
const NotFound = () => {
  return (
    <main className="h-full">
    <section className="flex flex-col items-center justify-center h-full">
      <Typography variant="h3">Oops!</Typography>
      <Typography variant="h3">The requested page cannot be found.</Typography>
      <Typography variant="h5">
        Sorry about that! Please visit homepage to get where you need to go.
      </Typography>
      <div>
        <a href="/">Back to Home!</a>
      </div>
    </section>
    </main>
  );
};

export default NotFound;
