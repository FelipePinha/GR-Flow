export const getFlows = async () => {
  const response = await fetch("https://api.xbase.app/api/flows", {
    next: {
      tags: ["flows"],
    },
  });

  const { data } = await response.json();

  return data;
};
