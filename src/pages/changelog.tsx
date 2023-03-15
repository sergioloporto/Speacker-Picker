import { Typography } from "@mui/material";
import { Layout } from "@/components/Layout/Layout";
import { Box } from "@mui/system";

export default function Changelog() {
  const spanStyles = { mr: "10px" };

  return (
    <Layout>
      <Typography paragraph>Changelog</Typography>
      <Typography paragraph>
        <Box component="span" sx={spanStyles}>
          0.2.0
        </Box>
        Migrated to Next.js
      </Typography>
      <Typography paragraph>
        <Box component="span" sx={spanStyles}>
          0.1.1
        </Box>
        Removed weekends. Now only working days are taken into account
      </Typography>
      <Typography paragraph>
        <Box component="span" sx={spanStyles}>
          0.1.0
        </Box>
        First working version
      </Typography>
    </Layout>
  );
}
