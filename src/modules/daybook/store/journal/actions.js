// export const myAction = async ({commit}) => {}

import journalAPI from "@/assets/api/journalAPI";

export const loadEntries = async ({ commit }) => {
  const { data } = await journalAPI.get("/entries.json");

  const entries = [];

  for (let id of Object.keys(data)) {
    entries.push({
      id,
      ...data[id],
    });
  }

  commit("setEntries", entries);
};

export const updateEntry = async (/*{commit}*/) => {};

export const createEntry = async (/*{commit}*/) => {};
