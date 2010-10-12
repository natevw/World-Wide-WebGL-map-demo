function(newDoc, oldDoc, userCtx) {
	if (userCtx.name !== 'admin') {
		throw({unauthorized : 'much sorries'});
	}
}
