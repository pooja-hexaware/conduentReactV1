import { Typography } from "@mui/material";

const NotAuthenticated = () => {
  return (
    <main className="h-full">
      <section className="flex flex-col items-center justify-center h-full">
        <Typography variant="h3">401 Hold Up!</Typography><br/>
        <Typography variant="h5">You are not authenticated to view this page</Typography>
        <Typography variant="h5">Sorry about that! Please login!</Typography>
        <div>
          <a href="/">Go to home</a>
        </div>
      </section>
    </main>
  );
};

export default NotAuthenticated;
