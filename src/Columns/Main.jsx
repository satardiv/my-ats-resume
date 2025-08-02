import React from "react";
import { View, Text } from "@react-pdf/renderer";
import { Header, CandidateName, Designation } from "./Components/Header";
import { Contacts, Contact } from "./Components/Contacts";
import { Section } from "./Components/Section";
import {
  Experience,
  Role,
  Company,
  BulletItem,
  Achievement,
} from "./Components/Experience";
import { Education, Certification, Institution } from "./Components/Education";
import { LAYOUT, TYPOGRAPHY, COLORS, SPACING } from "../Styles";
import data from "../data";

const VisaStatus = ({ visa }) => (
  <View style={{ marginTop: SPACING.sm, marginBottom: SPACING.lg }}>
    <Text style={{ 
      fontSize: TYPOGRAPHY.sizes.bodySmall, 
      color: COLORS.secondary,
      fontWeight: TYPOGRAPHY.fontWeights.bold
    }}>
      Visa Status: {visa}
    </Text>
  </View>
);

const Main = () => {
  return (
    <>
      <View
        style={{
          width: LAYOUT.mainColumnWidth,
          height: "100%",
          padding: LAYOUT.mainPadding,
        }}
      >
        <Header>
          <CandidateName value={data.personal.name} />
          <Designation value={data.personal.designation} />
        </Header>

        <Contacts>
          {data.personal.contacts.map((contact, index) => (
            <Contact
              key={index}
              type={contact.type}
              label={contact.label}
              urlPrefix={contact.urlPrefix}
            />
          ))}
        </Contacts>

        {data.personal.visa && (
          <VisaStatus visa={data.personal.visa} />
        )}

        <Section header="Professional Summary" style={{ marginTop: SPACING.xxxl }}>
          <Text style={{ 
            paddingTop: SPACING.xs, 
            lineHeight: TYPOGRAPHY.lineHeight.normal 
          }}>
            {data.summary}
          </Text>
        </Section>

        <Section header="Professional Experience" style={{ marginTop: SPACING.xxl }}>
          {data.experience.map((exp, index) => (
            <Experience key={index}>
              <Role
                role={exp.role}
                type={exp.type}
                from={exp.from}
                till={exp.till}
              />
              <Company name={exp.company} location={exp.location} />
              <Achievement>
                {exp.achievements.map((achievement, i) => (
                  <BulletItem key={i}>{achievement}</BulletItem>
                ))}
              </Achievement>
            </Experience>
          ))}
        </Section>

        <Section header="Education & Qualifications" style={{ marginTop: SPACING.md }}>
          {data.education.map((edu, index) => (
            <Education key={index}>
              <Certification
                name={edu.certification}
                from={edu.from}
                till={edu.till}
              />
              <Institution name={edu.institution} location={edu.location} />
            </Education>
          ))}
        </Section>
      </View>
    </>
  );
};

export default Main;
