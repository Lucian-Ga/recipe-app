import React, { useState } from "react";

function RecipeCreate({ createRecipe }) {
  const initialFormState = {
    name: "",
    cuisine: "",
    photo: "",
    ingredients: "",
    preparation: "",
  };
  const [formData, setFormData] = useState({ ...initialFormState });

  const handleContentChange = ({ target }) => {
    setFormData({
      ...formData,
      [target.name]: target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (Object.values(formData).some((value) => value.trim() === "")) {
      alert("All fields are required");
      return;
    }
    createRecipe(formData);
    setFormData({ ...initialFormState });
  };

  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  // TODO: Add the required input and textarea form elements.
  // TODO: Add the required submit and change handlers.

  return (
    <form name="create" onSubmit={handleSubmit}>
      <table>
        <tbody>
          <tr>
            <td>
              <input
                id="name"
                type="text"
                name="name"
                onChange={handleContentChange}
                value={formData.name}
                placeholder="Name"
                required
              />
            </td>
            <td>
              <input
                id="cuisine"
                type="text"
                name="cuisine"
                onChange={handleContentChange}
                value={formData.cuisine}
                placeholder="Cuisine"
                required
              />
            </td>
            <td>
              <input
                id="photo"
                type="url"
                name="photo"
                onChange={handleContentChange}
                value={formData.photo}
                placeholder="URL"
                required
              />
            </td>
            <td>
              <textarea
                id="ingredients"
                type="text"
                name="ingredients"
                onChange={handleContentChange}
                value={formData.ingredients}
                placeholder="Ingredients"
                required
              />
            </td>
            <td>
              <textarea
                id="preparation"
                type="text"
                name="preparation"
                onChange={handleContentChange}
                value={formData.preparation}
                placeholder="Preparation"
                required
              />
            </td>
            <td>
              <button type="submit" onClick={handleSubmit}>
                Create
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
