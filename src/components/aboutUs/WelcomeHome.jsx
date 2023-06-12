import {
  Box,
  Image,
  Text,
  Wrap,
} from "@chakra-ui/react";
import WelcomeHomePicture from "../../assets/welcome_home_picture.svg";

export const WelcomeHome = () => {

  return (
    <Wrap
      justify="center"
      sx={{
        py: "4rem",
      }}
    >
      <Image
        src={WelcomeHomePicture}
        sx={{
          w: "26rem",
        }}
      />
      <Box
        sx={{
          textAlign: "left",
          fontSize: 16,
          color: "primary",
          w: "40rem",
          px: "2rem",
        }}
      >
        <Text sx={{ my: 5 }}>
          Welcome to our home, where we created a platform to help us find the
          best product for our health, the animals and the planet.
        </Text>
        <Text sx={{ my: 5 }}>
          We grew up getting informed by books and our parents and even more
          with the launch of the internet and the accessibility to infinite
          information.
        </Text>
        <Text sx={{ my: 5 }}>
          We became more conscious about how bad was the impact we had on our
          planet based on our consumption habits and product of our culture. So
          we realized that without people like us in action together there
          wasn't much time left for the beauty of what we enjoyed as kids went
          on for next generations where our own kids would be.
        </Text>
        <Text sx={{ my: 5 }}>
          This is why we merged our interest, knowledge, studies and desires to
          create this earth loving marketplace to enhance the growing
          sustainable economy and add our strengths together to make it better.
        </Text>
        <Text sx={{ my: 5 }}>
          We are Bluehouse, the conscious marketplace, an online hub that
          provides awake buyers and sellers a space to interact, empower
          themselves and our growing community with means to change the world.
        </Text>
      </Box>
    </Wrap>
  );
};
