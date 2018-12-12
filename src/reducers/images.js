import {
  ADD_IMAGES,
  UPDATE_IMAGE_CATEGORY,
  UPDATE_IMAGE_VISIBILTY_BASED_ON_CATEGORY,
  UPDATE_IMAGE_VISIBILITY,
  UPDATE_UNLABELED_VISIBILITY,
  SET_IMAGE_CATEGORY_TO_NULL_BASED_ON_CATEGORY,
  ONLY_SHOW_IMAGES_WITH_CERTAIN_CATEGORY,
  UPDATE_PROBABILITY
} from '../constants';

const images = (state = {}, action) => {
  let images = {};
  switch (action.type) {
    // Call to add images to the store
    case ADD_IMAGES:
      return {
        ...state,
        images: action.images
      };

    // Update image visbility
    case UPDATE_IMAGE_VISIBILITY:
      images = { ...state.images };
      return {
        ...state,
        images: action.images
      };

    // Call to update category of images
    case UPDATE_IMAGE_CATEGORY:
      images = { ...state.images };
      for (let imgIdentifier of action.imgIdentifiers) {
        images[imgIdentifier].category = action.categoryIdentifier;
        images[imgIdentifier].categoryName = action.categoryName;
      }
      return {
        ...state,
        images: images
      };

    // Call to update the visibility of an image, helpful for filtering
    case UPDATE_IMAGE_VISIBILTY_BASED_ON_CATEGORY:
      images = { ...state.images };
      for (let key in images) {
        if (images[key].category === action.categoryIdentifier) {
          images[key].visible = action.value;
        }
      }
      return {
        ...state,
        images: images
      };

    // Call to toggle visibility of unlabeled images, helpful for blening out/in unlabeled images
    case UPDATE_UNLABELED_VISIBILITY:
      images = { ...state.images };
      for (let key in images) {
        if (images[key].category === null) {
          images[key].visible = !images[key].visible;
        }
      }
      return {
        ...state,
        images: images
      };

    // Call to make only images with a certain category visible
    case ONLY_SHOW_IMAGES_WITH_CERTAIN_CATEGORY:
      images = { ...state.images };
      for (let key in images) {
        if (images[key].category === action.categoryIdentifier) {
          images[key].visible = true;
        } else {
          images[key].visible = false;
        }
      }
      return { ...state, images: images };

    // Call to update images that have a certain category, helpful when a category was deleted
    case SET_IMAGE_CATEGORY_TO_NULL_BASED_ON_CATEGORY:
      images = { ...state.images };
      for (let key in images) {
        if (images[key].category === action.categoryIdentifier) {
          images[key].category = null;
        }
      }
      return { ...state, images: images };

    // Call to update the image probability, helpful for setting probablility after prediction and relabeling
    case UPDATE_PROBABILITY:
      images = { ...state.images };
      for (let imgIdentifier of action.imgIdentifiers) {
        images[imgIdentifier].probability = action.probability;
      }
      return { ...state, images: images };

    default:
      return state;
  }
};

export default images;
