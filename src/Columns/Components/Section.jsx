import React from "react";
import { View, Text, StyleSheet } from "@react-pdf/renderer";
import { TYPOGRAPHY, COLORS, SPACING } from "../../Styles";

const styles = StyleSheet.create({
  section: {
    marginBottom: SPACING.xl,
  },
  sectionHeader: {
    borderBottom: "1px",
    borderColor: COLORS.borders.light,
    paddingBottom: SPACING.md,
    marginBottom: SPACING.md,
    fontSize: TYPOGRAPHY.sizes.h2,
    textTransform: "uppercase",
  },
  sectionHeaderHighlight: {
    borderColor: COLORS.borders.white,
  },
  sectionContent: {
    marginTop: "0px",
  },
});

export const Section = React.memo(({
  header,
  children,
  style,
  partOfHighlight = false,
}) => (
  <View style={[styles.section, style]}>
    <Text
      style={[
        styles.sectionHeader, 
        partOfHighlight && styles.sectionHeaderHighlight
      ]}
    >
      {header}
    </Text>
    <View style={styles.sectionContent}>{children}</View>
  </View>
));

Section.displayName = "Section";
