import HeroBanner from "../../components/Herobanner/Herobanner";
import Split from "../../components/Split/Split";

const Homepage = () => {
  return (
    <div>
      <HeroBanner />
      <Split
        buttonProps={{
          text: "Button",
          variation: "__transparent",
          linkURL: "/letnjikamp",
        }}
      />
    </div>
  );
};

export default Homepage;
