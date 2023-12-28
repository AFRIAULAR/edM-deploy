<template>
  <div class="scrollbar-container">
    <div class="scrollbar"></div>
  </div>
</template>

<style>
.scrollbar-container {
  width:8px;
  height: 100%;
  padding: 1px;
  background: #D8D6DE;
  border-radius: 40px;
  display: inline-flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 10px;
}

.scrollbar {
  width: 8px;
  height: 100px;
  background: #6E6B7B;
  border-radius: 40px;
  margin-top: 5px;
}
</style>
