const express = require('express');

const {
  getCourses,
  // getCourse,
  // createCourse,
  // updateCourse,
  // deleteCourse,
  // getBootcampsInRadius,
} = require('../controllers/courses');

const router = express.Router({ mergeParams: true });

router.route('/').get(getCourses);

module.exports = router;