const sampleEntries = [{
  isActive: true,
  title: 'Roses are red Violets are blue',
  content: 'The next paragraph has the same phrases, but now they are separated by two spaces and a newline character:',
}, {
  isActive: false,
  title: 'Roses are red',
  content: 'Violets are blue',
}, {
  isActive: false,
  title: 'Oh, and one thing I cannot stand is the mangling of words with multiple underscores in them like perform_complicated_task or do_this_and_do_that_and_another_thing.',
  content: 'A bit of the GitHub spice',
}, {
  isActive: false,
  title: 'A bit of the GitHub spice',
  content: 'Violets are blue',
}, {
  isActive: false,
  title: 'In addition to the changes in the previous section, certain references are auto-linked:',
  content: 'SHA: be6a8cc1c1ecfe9489fb51e4869af15a13fc2cd2',
}, {
  isActive: false,
  title: 'User@SHA ref: mojombo@be6a8cc1c1ecfe9489fb51e4869af15a13fc2cd',
  content: 'User/Project@SHA: mojombo/god@be6a8cc1c1ecfe9489fb51e4869af15a13fc2cd2',
}, {
  isActive: false,
  title: '#Num: #1',
  content: 'User/#Num: mojombo#1',
}, {
  isActive: false,
  title: 'User/Project#Num: mojombo/god#1',
  content: 'These are dangerous goodies though, and we need to make sure email addresses don\'t get mangled:',
}, {
  isActive: false,
  title: 'Roses are red',
  content: 'Violets are blue',
}, {
  isActive: false,
  title: 'Oh, and one thing I cannot stand is the mangling of words with multiple underscores in them like perform_complicated_task or do_this_and_do_that_and_another_thing.',
  content: 'A bit of the GitHub spice',
}, {
  isActive: false,
  title: 'A bit of the GitHub spice',
  content: 'Violets are blue',
}, {
  isActive: false,
  title: 'In addition to the changes in the previous section, certain references are auto-linked:',
  content: 'SHA: be6a8cc1c1ecfe9489fb51e4869af15a13fc2cd2',
}, {
  isActive: false,
  title: 'User@SHA ref: mojombo@be6a8cc1c1ecfe9489fb51e4869af15a13fc2cd',
  content: 'User/Project@SHA: mojombo/god@be6a8cc1c1ecfe9489fb51e4869af15a13fc2cd2',
}, {
  isActive: false,
  title: '#Num: #1',
  content: 'User/#Num: mojombo#1',
}, {
  isActive: false,
  title: 'User/Project#Num: mojombo/god#1',
  content: 'These are dangerous goodies though, and we need to make sure email addresses don\'t get mangled:',
}]

const state = {
  entries: [],
}

const mutations = {
  SET_ENTRIES(state, { entries }) {
    state.entries = entries
  },
  ACTIVE_ENTRY(state, { entry }) {
    const copiedEntries = state.entries.map((obj) => {
      if (obj === entry) {
        return {
          ...entry,
          isActive: true,
        }
      }
      return {
        ...obj,
        isActive: false,
      }
    })
    state.entries = copiedEntries
  },
  ADD_ENTRY(state, { entry }) {
    state.entries.unshift(entry)
  },
}

const actions = {
  SET_ENTRIES({ commit }) {
    // do something async
    commit('SET_ENTRIES', {
      entries: sampleEntries,
    })
  },
  ADD_ENTRY({ commit }) {
    const newEntry = {
      isActive: false,
      title: 'New Title',
      content: '# New Title\n * Some Content\n * Some Content',
    }
    commit('ADD_ENTRY', { entry: newEntry })
    commit('ACTIVE_ENTRY', { entry: newEntry })
  },
}

export default {
  state,
  mutations,
  actions,
}
