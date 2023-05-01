const { AuthenticationError } = require('apollo-server-errors');
const { User, Book } = require('../models');
const { signToken } = require('../utils/auth');