import { Text, View } from "@react-pdf/renderer";
import { Section } from "./Components/Section";
import { Achievement } from "./Components/Achievement";
import { LAYOUT, TYPOGRAPHY, COLORS, SPACING } from "../Styles";
import data from "../data";

const SkillCategory = ({ title, skills }) => (
  <View style={{ marginBottom: SPACING.lg }}>
    <Text style={{ 
      fontSize: TYPOGRAPHY.sizes.bodySmall, 
      fontWeight: TYPOGRAPHY.fontWeights.bold, 
      color: COLORS.text.white,
      marginBottom: SPACING.xs
    }}>
      {title}
    </Text>
    <View
      style={{
        flexDirection: "row",
        gap: SPACING.xs,
        flexWrap: "wrap",
        columnGap: SPACING.xs,
      }}
    >
      {skills.map((skill, index) => (
        <Text key={index} style={{ fontSize: TYPOGRAPHY.sizes.bodySmall }}>
          {skill}
          {index < skills.length - 1 ? "," : ""}
        </Text>
      ))}
    </View>
  </View>
);

const Highlight = () => {
  return (
    <View
      style={{
        width: LAYOUT.highlightColumnWidth,
        height: "100%",
        backgroundColor: COLORS.primary,
        padding: LAYOUT.highlightPadding,
      }}
    >
      <Section
        header="Key Achievements"
        style={{ color: COLORS.text.white }}
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
        header="Core Skills & Tools"
        style={{ marginTop: SPACING.md, color: COLORS.text.white }}
        partOfHighlight={true}
      >
        <SkillCategory title="Audit & Risk" skills={data.coreSkills.audit} />
        <SkillCategory title="Financial Standards" skills={data.coreSkills.financial} />
        <SkillCategory title="Technical Skills" skills={data.coreSkills.technical} />
        <SkillCategory title="Audit Tools" skills={data.coreSkills.tools} />
      </Section>

      <Section
        header="Certifications"
        style={{ marginTop: SPACING.md, color: COLORS.text.white }}
        partOfHighlight={true}
      >
        <View>
          {data.certifications.map((cert, index) => (
            <Text key={index} style={{ 
              fontSize: TYPOGRAPHY.sizes.bodySmall,
              marginBottom: SPACING.xs,
              lineHeight: TYPOGRAPHY.lineHeight.tight
            }}>
              • {cert}
            </Text>
          ))}
        </View>
      </Section>
    </View>
  );
};

export default Highlight;
