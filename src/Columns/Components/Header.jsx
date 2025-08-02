import React from "react";
import { View, Text, StyleSheet } from "@react-pdf/renderer";
import { TYPOGRAPHY, COLORS, SPACING } from "../../Styles";

const styles = StyleSheet.create({
  header: {
    marginBottom: SPACING.xs,
  },
  candidateName: {
    fontSize: TYPOGRAPHY.sizes.h1,
    textTransform: "uppercase",
    fontWeight: TYPOGRAPHY.fontWeights.semibold,
  },
  designation: {
    fontSize: TYPOGRAPHY.sizes.h2,
    color: COLORS.secondary,
    padding: `${SPACING.sm} 0 ${SPACING.sm} 0`,
  },
});

export const CandidateName = React.memo(({ value }) => (
  <Text style={styles.candidateName}>{value}</Text>
));

CandidateName.displayName = "CandidateName";

export const Designation = React.memo(({ value }) => (
  <Text style={styles.designation}>{value}</Text>
));

Designation.displayName = "Designation";

export const Header = React.memo(({ children }) => (
  <View style={styles.header}>{children}</View>
));

Header.displayName = "Header";
