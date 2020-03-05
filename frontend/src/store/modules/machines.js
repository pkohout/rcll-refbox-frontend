// eslint-disable-next-line no-unused-vars
import { get, post } from '@/api/api'

export default{
  state: {
    machinesCyan: [],
    machinesMagenta: []
  },
  getters: {

  },
  mutations: {
    setMachinesCyan(state,data) {
      state.machinesCyan = data;
    }
  },
  actions: {
    // eslint-disable-next-line no-unused-vars
    // Get params: 1: url, 2:params, 3:timeout, 4:data
    async fetchMachinesCyan({commit}) {
      try {
        const response = await get('/machines', {team:'CYAN'});
        const data = response.data;
        commit('setMachinesCyan', data);

        // Update Machine Info by polling every 1 second
        
      } catch(error){
        console.log(error);
      }
    }
  }
   
}