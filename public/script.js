async function bestellen(product) {
  try {
    const res = await fetch("/bestelling", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ product })
    });

    if (!res.ok) {
      alert("Er ging iets mis met de bestelling.");
      return;
    }

    alert("Bestelling verstuurd voor: " + product);
  } catch (e) {
    alert("Kan de server niet bereiken.");
  }
}