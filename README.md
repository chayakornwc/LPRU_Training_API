# APPLICATION PROGRAMING INTERFACE

app.post('/signin',requireSignin, users.signin)
     app.get('/updateToken',requireAuth, users.signin);
     app.get('/users',requireAuth,  users.findAll)

# Use user account managing
    app.post('/registers', registers.create) 
    app.post('/users', requireAuth, users.create)
    app.get('/users/:id', requireAuth, users.findById)
    app.put('/users/:id', requireAuth, users.update)
    app.delete('/users/:id', requireAuth, users.delete)

    app.get('/course',  courses.findAll);
    app.get('/course/:id',  courses.findById);
    app.post('/course', requireAuth, courses.create);
    
    app.put('/course/:id', requireAuth, courses.update);
    app.delete('/course/:id', requireAuth, courses.delete);

    app.get('/period/',  period.findAll);
    app.get('/period/:id', period.findById);
    app.post('/period/', requireAuth, period.create);

    app.put('/period/:id', requireAuth, period.update);
    app.delete('/period/:id', requireAuth, period.delete);

    app.get('/courseorder/', courseOrder.findAll);
    app.get('/courseorder/:id', courseOrder.findById)
    app.post('/courseorder/', courseOrder.create);
    app.get('/courseorder/user/:id', requireAuth, courseOrder.findByuserId)
    app.put('/courseorder/:id',courseOrder.update);
    app.delete('/courseorder/:id', courseOrder.delete);
    
    app.get('/examination/:course_id/:exam_id', Examination.findById);
    app.post('/registerexamination/', requireAuth,  Examination.registers);
    app.get('/examinationbycourse/', requireAuth, courses.findAllByExams);
    app.get('/nullexamination/', Examination.findNullexam);
    app.get('/examination/:id', requireAuth, Examination.findExambycourse);
    app.post('/registerexamination/update/:id', requireAuth, Examination.update);

    app.get('/operation_room/', requireAuth, operationRoom.findAll);
    app.get('/operation_room/:id',requireAuth, operationRoom.findById);
    app.post('/operation_room/', requireAuth, operationRoom.create);
    app.put('/operation_room/:id', requireAuth, operationRoom.update);
    app.delete('/operation_room/:id', requireAuth, operationRoom.delete);

    app.get('/attendee/:id', attendee.findById);
    app.post('/attendee/:id', requireAuth, attendee.create);
    app.delete('/attendee/:id', requireAuth, attendee.delete);

    app.get('/publicusers/', users.findByTerm);
    app.get('/publicuser/:id', requireAuth, users.findPublicId);
