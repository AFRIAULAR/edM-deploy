<template>
  <div class="container" style="max-height: 111px; overflow-y: auto;">
    <div class="d-flex flex-wrap">
      <div v-for="(card, index) in cards" :key="index" class="col-md-4 col-lg-3 mb-4">
        <div class="card-content">
          <div class="card-body-content">
            <div class="d-flex justify-content-between align-items-center mb-3">
              <div class="icon-background">
                <div class="material-icon">{{ card.icon }}</div>
              </div>
              <div class="text-right">
                <div class="font-weight-bold">{{ card.title }}</div>
                <div>{{ card.subtitle }}</div>
              </div>
            </div>
            <div class="d-flex justify-content-between align-items-start">
              <div class="text-left">
                <div class="font-weight-bold">Created on</div>
                <div>{{ card.created }}</div>
              </div>
              <div class="text-right">
                <div class="font-weight-bold">{{ card.label }}</div>
                <div>{{ card.updated }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cards: [
        {
          icon: 'today',
          title: 'Record Age',
          subtitle: '12 days',
          created: 'Jan 2, 2023',
          label: 'Updated',
          updated: 'Nov 2, 2023'
        },
        {
          icon: 'check_circle',
          title: 'Status',
          subtitle: 'Active',
          label: 'Updated',
          updated: 'Nov 2, 2023'
        },
        {
          icon: 'location_on',
          title: 'Country',
          subtitle: 'México',
          label: 'State',
          updated: 'Córdoba'
        },
        {
          icon: 'contact_page',
          title: 'Last Contact',
          subtitle: '2 days ago',
          label: 'Nov 29, 2023',
          updated: '2:43pm'
        },
        {
          icon: 'timeline',
          title: 'Last Activity',
          subtitle: '7 days ago',
          label: 'Nov 29, 2023',
          updated: '2:43pm'
        }
      ]
    };
  }
};
</script>

<style>
.icon-background {
  width: 40px;
  height: 40px;
  background: #91CC75;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.material-icon {
  color: white;
  font-size: 25px;
  font-family: 'Material Icons';
  font-weight: 400;
}
.card-content{
  width: 207px;
  height: 111px;
  border-radius: 6%;
  padding: 15px;
  margin: 10px;
} 
.card-body-content {
  display: flex;
  flex-direction: column;
  font-size: 14px; 
}
</style>
