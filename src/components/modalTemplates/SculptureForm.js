const SculptureForm = () => {
  return (
    <>
      <label htmlFor="author">Auteur</label>
      <input name="author" type="text" />

      <label htmlFor="name">Nom de la sculpture</label>
      <input name="name" type="text" />

      <label htmlFor="material">Matériau</label>
      <input name="material" type="text" />

      <label htmlFor="isAvailable">Disponible</label>
      <input name="isAvailable" type="checkbox" />
    </>
  );
};
export default SculptureForm;
