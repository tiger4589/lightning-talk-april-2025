using MediatR;

namespace Application.AddNote;

public record AddNoteCommand(string Title, string Content) : IRequest<Guid>;
