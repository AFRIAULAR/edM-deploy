<template>
  <div class="icon-wrapper bg-white mt-0" :class="{ expanded: isExpanded }" :style="{ width: menuWidth + 'px' }">
    <div v-for="(iconData, iconName, index) in iconManager" :key="iconName">
      <div class="icon-button-container">
<button
  class="icon-button"
  :class="[
    iconName === selectedIcon || (isExpanded && iconName === 'dashBoard') ? 'special-icon' : '',
    isExpanded && ['analytics', 'school'].includes(iconName) ? 'expanded-button' : ''
  ]"
  :style="{
    backgroundColor: (isExpanded && selectedIcon === iconName) || iconName === 'dashBoard' ? '#4436FD' : '#ffffff',
    color: (isExpanded && selectedIcon === iconName) || iconName === 'dashBoard' ? '#ffffff' : '#6E6B7B',
  }"
  @click="toggleIconSize(iconName)"
>
          <div class="button-content">
            <div class="icon-text-container">
              <i class="material-icons" v-if="iconName !== 'more' || !isExpanded">{{ iconData.iconClass }}</i>
              <span v-if="isExpanded" class="icon-text" style="font-weight: 700; color: #babfc7">
                {{ iconData.text }}
                <i v-if="isExpanded && ['analytics', 'school'].includes(iconName)" class="material-icons icon-expand">
                  {{ expandedLists[iconName] ? 'expand_less' : 'expand_more' }}
                </i>
              </span>
              <span v-else-if="selectedIcon === iconName" class="icon-text">{{ iconData.text }}</span>
            </div>
          </div>
        </button>
      </div>

      <ul v-show="isExpanded && expandedLists[iconName]" class="dropdown-list">
        <li v-for="item in iconData.dropdownItems" :key="item">
          <span>{{ item }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import iconsData from "@/utils/iconsdata.json";
import { toggleIconSize, buttonClasses, buttonStyles } from "./iconMethodsMenu";


export default {
  props: {
    isExpanded: Boolean,
    menuWidth: Number,
    selectedIcon: String,
  },
  data() {
    return {
      iconManager: iconsData,
      expandedLists: {
        analytics: false,
        school: false,
      },
    };
  },
  methods: {
    toggleIconSize,
    buttonClasses,
    buttonStyles
  },
};
</script>

<style scoped>

.icon-button-container {
  display: flex;
  align-items: center;
}

.icon-expand {
  font-size: 24px;
 
  margin-left:40px;
}

.expanded .icon-expand {
  visibility: visible;
}

.icon-wrapper {
  width: 65px;
  padding-top: 10px;
  margin-top: 10px;
  color: #6e6b7b;
}

.expanded {
  width: 250px;
  margin-top: 0;
  padding-top: 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
}

.icon-button {
  display: flex;
  font-family: "Material Icons";
  font-size: 24px;
  font-weight: 400;
  line-height: 21px;
  border-radius: 10px;
  border: none;
  padding: 10px;
  margin-top: 10px;
  transition: width 0.3s ease, padding 0.3s ease;
  z-index: 999;
  align-items: center;
  max-width: 230px;
}

.button-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

.special-icon {
  color: #ffffff;
  background: #4436fd;
}

.icon-text-container {
  display: flex;
  align-items: center;
  text-align: start;
}

.icon-text {
  margin-left: 10px;
  font-family: Arial, sans-serif;
  font-size: 15px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px;
  width: 196px;
}
</style>