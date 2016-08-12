/**
 * WebController
 *
 * @description :: Server-side logic for managing webs
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	indexIO: function(req, res) {
		return res.view('blank', {
			layout: 'index'
		})
	},
	actionIO: function(req, res) {
		action = req.param('action');
		switch(action) {
			case 'index':
				return res.view('blank', {
					layout: 'index',
				})
			case 'humix-think':
				return res.view('blank', {
					layout: 'humix-think',
				})
			case 'humix-sense':
				return res.view('blank', {
					layout: 'humix-sense',
				})
			case 'example':
				return res.view('blank', {
					layout: 'example',
				})
			case 'feature':
				return res.view('blank', {
					layout: 'feature',
				})
			case 'documentation':
				return res.view('blank', {
					layout: 'documentation',
				})
			case 'support':
				return res.view('blank', {
					layout: 'support',
				})
		}
	}
};

