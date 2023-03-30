const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  // find all categories
  try {
    const categoryData = await Category.findAll({
      attribute: ["id", "category_name"],
      include: [
        {
          model: Product,
          attribute: ["id", "product_name", "price", "stock", "category_id"],
        }
      ]
    });
    res.status(200).json(categoryData);
  } catch (error) {
    res.status(500).json(error)
  }
});

router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  try {
    const categoryData = await Category.findByPk(req.params.id, {
      include: [
        {
          model: Product,
          attributes: ["id", "product_name", "price", "stock", "category_id"],
        }
      ]
    });

    if (!categoryData) {
      res.status(404).json({ message: 'No category found for that id!' });
      return;
    }
    res.status(200).json(categoryData);
  } catch (error) {
    res.status(500).json(error)
  }
});

router.post('/', async (req, res) => {
  // create a new category
  try {
    const categoryData = await Category.create(req.body);
    res.status(200).json(categoryData);
  } catch (error) {
    res.status(500).json(error)
  }
});

router.put('/:id', async (req, res) => {
  // update a category by its `id` value
  try {
    const categoryData = await Category.update(req.body, {
      where: {
        id: req.params.id
      },
    });

    if(!categoryData) {
      res.status(404).json({message: 'No category found with that id!'});
      return;
    }
    res.status(200).json(categoryData);
  } catch (error) {
    res.status(500).json(error)
  }
});

router.delete('/:id', async (req, res) => {
  // delete a category by its `id` value
  try {
    const categoryData = await Category.destroy({
      where: {
        id: req.params.id
      },
    });

    if(!categoryData) {
      res.status(404),json({ message: 'No category found with that id!'});
      return;
    }
    res.status(200).json(categoryData);
  } catch (error) {
    res.status(500).json(error)
  }
});

module.exports = router;
