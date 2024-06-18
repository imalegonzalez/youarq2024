import { client } from './contentful/client';

async function getProyectoData(slug) {
    const res = await client.getEntries({
      content_type: "obra",
      "fields.slug": slug,
    });
    return res.items[0];
  }
  
  async function getAllObras() {
    const res = await client.getEntries({
      content_type: "obra",
    });
    return res.items;
  }