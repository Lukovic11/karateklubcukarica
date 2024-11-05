import HeroBanner from "../../components/Herobanner/Herobanner";
import Split from "../../components/Split/Split";
import { SPLIT_TITLE } from "../../constants";

const Homepage = () => {
  return (
    <div>
      <HeroBanner />
      <Split
        orientation="image-right"
        buttonProps={{
          text: "Button",
          variation: "__transparent",
          linkURL: "/letnjikamp",
        }}
        title={SPLIT_TITLE}
      />
    </div>
  );
};

export default Homepage;
