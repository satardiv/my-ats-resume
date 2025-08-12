import React from "react";
import { Text, View } from "@react-pdf/renderer";
import { style } from "../Styles";
import { Section } from "./Components/Section";
import { Achievement } from "./Components/Achievement";
import data from "../data";

const Highlight = () => {
  return (
    <View
      style={{
        width: "40%",
        height: "100%",
        backgroundColor: style.colors.primary,
        padding: "108px 40px 40px 20px",
      }}
    >
      <Section
        header="Key Achievements"
        style={{ color: "#fff" }}
        partOfHighlight={true}
      >
        {data.keyAchievements.map((achievement, index) => (
          <Achievement
            key={index}
            title={achievement.title}
            desc={achievement.desc}
          />
        ))}
      </Section>

      <Section
        header="Skills"
        style={{ marginTop: "6px", color: "#fff" }}
        partOfHighlight={true}
      >
        <View
          style={{
            flexDirection: "row",
            gap: "2px",
            flexWrap: "wrap",
            columnGap: "2px",
          }}
        >
          {data.skills.map((skill, index) => (
            <Text key={index}>
              {skill}
              {index < data.skills.length - 1 ? "," : ""}
            </Text>
          ))}
        </View>
      </Section>
    </View>
  );
};

export default Highlight;
