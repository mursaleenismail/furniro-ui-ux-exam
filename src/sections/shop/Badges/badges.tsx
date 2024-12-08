"use client";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import CustomerSupport from "../../../../public/Shop/customer-support.svg";
import freeSheeping from "../../../../public/Shop/freeshipping.svg";
import Gurantee from "../../../../public/Shop/guarantee.svg";
import Trophy from "../../../../public/Shop/trophy 1.svg";
// Import your ShopCard component
import ShopCard from "@/components/ShopCard/shopCard";

const Badges = () => {
  return (
    <Box
      sx={{
        paddingTop: "5%",
        backgroundColor:"#FAF3EA"
      }}
    >
      {/* <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <PCTypograpghy variant="h2">Why Choose Us?</PCTypograpghy>
        <Image src={Rectangle} width={190} height={12} alt="" />
      </Box> */}

      <Stack>
        <Grid container spacing={0}>
          <Grid xl={4} lg={4} md={4} sm={6} xs={12}>
            <ShopCard
              image={Trophy}
              title="Potential ROI"
              subtitle="Whether you are looking to buy a fixer-upper or renovate your current home for sale, we will walk you through potential returns for projects."
            />
          </Grid>

          <Grid xl={4} lg={4} md={4} sm={6} xs={12}>
            <ShopCard
              image={Gurantee}
              title="Design"
              subtitle="Our background in interior design makes the perfect guide through your design options and coordinating contractors to complete the home upgrade."
            />
          </Grid>

          <Grid xl={4} lg={4} md={4} sm={6} xs={12}>
            <ShopCard
              image={freeSheeping}
              title="Marketing"
              subtitle="Staging consultation, professional photos and a sophisticated digital marketing plan accompany every listing to reach today’s buyers."
            />
          </Grid>
          <Grid xl={4} lg={4} md={4} sm={6} xs={12}>
            <ShopCard
              image={CustomerSupport}
              title="Marketing"
              subtitle="Staging consultation, professional photos and a sophisticated digital marketing plan accompany every listing to reach today’s buyers."
            />
          </Grid>
        </Grid>
      </Stack>
    </Box>
  );
};

export default Badges;
