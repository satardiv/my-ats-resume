import React from "react";
import { View, Text, StyleSheet } from "@react-pdf/renderer";
import { TYPOGRAPHY, COLORS, SPACING } from "../../Styles";

const styles = StyleSheet.create({
  experience: {
    marginTop: SPACING.sm,
    marginBottom: SPACING.sm,
  },
  roleContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: SPACING.xs,
  },
  roleTitle: {
    fontSize: TYPOGRAPHY.sizes.body,
    fontWeight: TYPOGRAPHY.fontWeights.bold,
  },
  roleType: {
    marginLeft: SPACING.xs,
    fontSize: TYPOGRAPHY.sizes.body,
  },
  datePeriod: {
    fontSize: TYPOGRAPHY.sizes.bodySmall,
  },
  companyContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: SPACING.sm,
  },
  companyName: {
    fontSize: TYPOGRAPHY.sizes.body,
    color: COLORS.secondary,
    paddingTop: SPACING.xs,
  },
  companyLocation: {
    fontSize: TYPOGRAPHY.sizes.bodySmall,
    paddingTop: SPACING.xs,
  },
  achievementContainer: {
    marginTop: SPACING.sm,
  },
  bulletContainer: {
    flexDirection: "row",
    marginBottom: SPACING.xs,
  },
  bullet: {
    width: "10px",
    fontSize: TYPOGRAPHY.sizes.body,
  },
  bulletText: {
    flex: 1,
    lineHeight: TYPOGRAPHY.lineHeight.normal,
    fontSize: TYPOGRAPHY.sizes.bodySmall,
  },
});

// Experience container
export const Experience = React.memo(({ children }) => (
  <View style={styles.experience}>{children}</View>
));

Experience.displayName = "Experience";

// Role component with date period
export const Role = React.memo(({ role, type, from, till }) => (
  <View style={styles.roleContainer}>
    <View style={{ flexDirection: "row" }}>
      <Text style={styles.roleTitle}>{role}</Text>
      {type && <Text style={styles.roleType}>{` | ${type}`}</Text>}
    </View>
    <Text style={styles.datePeriod}>
      {from} - {till}
    </Text>
  </View>
));

Role.displayName = "Role";

// Company component with location
export const Company = React.memo(({ name, location }) => (
  <View style={styles.companyContainer}>
    <Text style={styles.companyName}>{name}</Text>
    <Text style={styles.companyLocation}>{location}</Text>
  </View>
));

Company.displayName = "Company";

// Container for achievements/bullet points
export const Achievement = React.memo(({ children }) => (
  <View style={styles.achievementContainer}>{children}</View>
));

Achievement.displayName = "Achievement";

// Individual bullet point item
export const BulletItem = React.memo(({ children }) => (
  <View style={styles.bulletContainer}>
    <Text style={styles.bullet}>•</Text>
    <Text style={styles.bulletText}>{children}</Text>
  </View>
));

BulletItem.displayName = "BulletItem";
