using MediatR;

namespace Application.UpdateNote;

public record UpdateNoteCommand(Guid NoteId, string Title, string Content) : IRequest;
