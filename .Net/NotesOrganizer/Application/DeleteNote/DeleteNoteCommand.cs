using MediatR;

namespace Application.DeleteNote;

public record DeleteNoteCommand(Guid NoteId) : IRequest;