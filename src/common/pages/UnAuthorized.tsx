import { Typography } from "@mui/material";

const UnAuthorized = () => {
  return (
    <main className="h-full">
    <section className="flex flex-col items-center justify-center h-full">
      <Typography variant="h3">403 Hold Up!</Typography>
      <Typography variant="h3">You are unauthorized to view this page</Typography>
      <Typography variant="h5">
        Sorry about that! Please check the permission level to view this page.
      </Typography>
      <div>
        <a href="/">Go to Home</a>
      </div>
    </section>
    </main>
  );
};

export default UnAuthorized;
