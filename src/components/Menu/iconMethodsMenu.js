export const toggleIconSize = (iconName) => {
  const shouldExpand = this.selectedIcon !== iconName || !this.isExpanded;
  this.$emit("expand-menu", shouldExpand);
  this.$emit("select-icon", shouldExpand ? iconName : "");

  if (["analytics", "school"].includes(iconName)) {
    this.expandedLists[iconName] = !this.expandedLists[iconName];
  }
};

export const buttonClasses = (iconName) => {
  return [
    (iconName === this.selectedIcon || (this.isExpanded && iconName === "dashboard")) ? "special-icon" : "",
    this.isExpanded && ["analytics", "school"].includes(iconName) ? "expanded-button" : "",
  ];
};

export const buttonStyles = (iconName) => {
  const isActive = (this.isExpanded && this.selectedIcon === iconName) || iconName === "dashboard";
  return {
    backgroundColor: isActive ? "#4436FD" : "#ffffff",
    color: isActive ? "#ffffff" : "#6E6B7B",
  };
};